import { DocsComponent } from './features/docs/docs.component';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
    loadChildren: () => import('./features/docs/docs.routes'),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
