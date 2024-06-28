import { ComponentsComponent } from './components/components.component';
import { CustomizeComponent } from './customize/customize.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';

import { Routes } from '@angular/router';

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
    path: 'components',
    component: ComponentsComponent,
    loadChildren: () => import('./components/components.routes'),
  },
  {
    path: 'customize',
    component: CustomizeComponent,
    loadChildren: () => import('./customize/customize.routes'),
  },
] as Routes;
