import { appRoutes } from './app.routes';
import { initIcons } from './icon.init';

import { IconRegistry, initFlowbite } from 'flowbite-angular';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER, PLATFORM_ID, type ApplicationConfig } from '@angular/core';
import { DomSanitizer, provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'top' })),
    provideHttpClient(withFetch()),
    initFlowbite(),
    {
      provide: APP_INITIALIZER,
      useFactory: initIcons,
      deps: [IconRegistry, DomSanitizer, PLATFORM_ID],
      multi: false,
    },
  ],
};
