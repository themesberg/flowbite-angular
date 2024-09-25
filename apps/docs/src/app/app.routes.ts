import { UiComponent } from './ui/ui.component';

import type { Routes } from '@angular/router';
import { NG_DOC_ROUTING } from '@ng-doc/generated';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'ui',
    pathMatch: 'full',
  },
  {
    path: 'ui',
    component: UiComponent,
    loadChildren: () => import('./ui/app.routes'),
  },
  {
    path: 'frames',
    loadChildren: () => import('./frames/frames.routes'),
  },
  {
    path: 'docs',
    children: NG_DOC_ROUTING,
  },
  {
    path: '**',
    redirectTo: 'ui',
    pathMatch: 'full',
  },
];
