import { NotFoundComponent } from '../ui/shared/components/not-found/not-found.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'accordion',
    loadChildren: () => import('./accordion/accordion.routes'),
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.routes'),
  },
  {
    path: 'badge',
    loadChildren: () => import('./badge/badge.routes'),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
] as Routes;
