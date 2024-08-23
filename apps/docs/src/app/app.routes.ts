import { UiComponent } from './ui/ui.component';

import type { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
    path: '**',
    redirectTo: 'ui',
    pathMatch: 'full',
  },
];
