import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { addIcons } from 'ionicons';
import { alertCircleOutline, alertCircle, menuOutline, heart, heartOutline, star, pinOutline } from 'ionicons/icons';

addIcons({
  'alert-circle-outline': alertCircleOutline,
  'alert-circle': alertCircle,
  'menu-outline': menuOutline,
  'heart': heart,
  'heart-outline': heartOutline,
  'star': star,
  'pin-outline': pinOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
