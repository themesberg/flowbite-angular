import { DocsComponent } from './features/docs/docs.component';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

import type { Routes } from '@angular/router';

export default [
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
    title: 'Where are you going ?',
  },
] as Routes;
