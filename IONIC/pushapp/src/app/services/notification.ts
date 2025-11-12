import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import  OneSignal from 'onesignal-cordova-plugin';
import { environment } from '../../environments/environment';
import { Browser} from '@capacitor/browser';

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

}
