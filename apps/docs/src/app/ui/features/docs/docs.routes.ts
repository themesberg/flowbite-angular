import { CustomizeComponent } from './customize/customize.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'getting-started',
    pathMatch: 'full',
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent,
    loadChildren: () => import('./getting-started/getting-started.routes'),
  },
  {
    path: 'customize',
    component: CustomizeComponent,
    loadChildren: () => import('./customize/customize.routes'),
  },
] as Routes;
