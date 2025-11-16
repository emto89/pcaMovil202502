import { Injectable } from '@angular/core';
import { Capacitor, CapacitorHttp, HttpResponse  } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import  OneSignal from 'onesignal-cordova-plugin';
import { environment } from '../../environments/environment';
import { Browser} from '@capacitor/browser';
import { INotification } from '../models/notification.model';
import moment from 'moment-timezone';

@Injectable({
  providedIn: 'root',
})
export class Notification {

  init(){
   const isPushNotificationAvaliable = Capacitor.isPluginAvailable('PushNotifications');
   if(isPushNotificationAvaliable){
     PushNotifications.requestPermissions().then(result => {
        if(result.receive){
          OneSignal.initialize(environment.oneSignalAppId);

          OneSignal.Notifications.addEventListener('click', async (e) =>{
             const notification: any = e.notification;
             if( notification.additionalData['url']){
                  await Browser.open({ url: notification.additionalData['url'] })
             }
          });
        }
    });
   }

  }
  sendNotification(notification: INotification){

    const userTimezone = moment.tz.guess();

    return CapacitorHttp.post({
      url: 'https://onesignal.com/api/v1/notifications',
      params: {},
      data: {
        app_id: environment.oneSignalAppId,
        included_segments: ['Total Subscriptions'],
        headings: { "en": notification.title },
        contents: { "en": notification.body },
        data: { url: notification.url },
        send_after: moment(notification.date).tz(userTimezone).format('YYYY-MM-DD HH:mm:ss [GMT]Z')
      },
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Basic ${environment.oneSignalApiKey}`
      }
    }).then( (response: HttpResponse) =>{
      console.log(response);
      return response.status === 200
    })


  }

}
