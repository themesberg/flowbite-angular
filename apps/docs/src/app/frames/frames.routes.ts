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
    path: 'breadcrumb',
    loadChildren: () => import('./breadcrumb/breadcrumb.routes'),
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.routes'),
  },
  {
    path: 'dropdown',
    loadChildren: () => import('./dropdown/dropdown.routes'),
  },
  {
    path: 'indicator',
    loadChildren: () => import('./indicator/indicator.routes'),
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.routes'),
  },
  {
    path: 'navbar',
    loadChildren: () => import('./navbar/navbar.routes'),
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./sidebar/sidebar.routes'),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
] as Routes;
