import { appRoutes } from './app.routes';
import { initIcons } from './icon.init';

import { IconRegistry, initFlowbite } from 'flowbite-angular';

import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { APP_INITIALIZER, PLATFORM_ID, type ApplicationConfig } from '@angular/core';
import { DomSanitizer, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  NgDocDefaultSearchEngine,
  provideMainPageProcessor,
  provideNgDocApp,
  providePageSkeleton,
  provideSearchEngine,
} from '@ng-doc/app';
import { provideNgDocContext } from '@ng-doc/generated';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideNgDocContext(),
    provideNgDocApp(),
    provideSearchEngine(NgDocDefaultSearchEngine),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
    provideClientHydration(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    ),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    initFlowbite(),
    {
      provide: APP_INITIALIZER,
      useFactory: initIcons,
      deps: [IconRegistry, DomSanitizer, PLATFORM_ID],
      multi: true,
    },
  ],
};
