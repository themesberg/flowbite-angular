import { appRoutes } from './app.routes';
import { docDemoDisplayerProcessor } from './shared/processors/doc-demo-displayer-processor/doc-demo-displayer-processor';

import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { type ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
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
    provideAnimations(),
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
    provideClientHydration(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
  ],
};
