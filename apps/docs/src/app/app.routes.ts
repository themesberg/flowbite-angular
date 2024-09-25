import type { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'new-docs',
    pathMatch: 'full',
  },
  {
    path: 'new-docs',
    loadChildren: () => import('./pages/landing/landing.routes'),
  },
  {
    path: 'new-docs/docs',
    loadChildren: () => import('./pages/docs/docs.routes'),
  },
  {
    path: '**',
    redirectTo: 'ui',
    pathMatch: 'full',
  },
];
