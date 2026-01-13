import { appRoutes } from './app.routes';
import { docDemoDisplayerProcessor } from './shared/processors/doc-demo-displayer-processor/doc-demo-displayer-processor';

import { provideFlowbiteThemeConfig } from 'flowbite-angular/theme-toggle';

import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideZoneChangeDetection, type ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  NgDocDefaultSearchEngine,
  provideMainPageProcessor,
  provideNgDocApp,
  providePageProcessor,
  providePageSkeleton,
  provideSearchEngine,
} from '@ng-doc/app';
import { provideNgDocContext } from '@ng-doc/generated';

export const appConfig: ApplicationConfig = {
  providers: [
    // #region NgDoc
    provideNgDocContext(),
    provideNgDocApp({
      shiki: {
        themes: [
          import('shiki/themes/material-theme.mjs'),
          import('shiki/themes/material-theme-lighter.mjs'),
        ],
        theme: {
          light: 'material-theme-lighter',
          dark: 'material-theme',
        },
      },
    }),
    provideSearchEngine(NgDocDefaultSearchEngine, { tolerance: 2 }),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
    providePageProcessor(docDemoDisplayerProcessor),
    // #endregion
    provideZoneChangeDetection(),
    provideClientHydration(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideFlowbiteThemeConfig({
      type: { type: 'attr', name: 'data-theme' },
    }),
  ],
};
