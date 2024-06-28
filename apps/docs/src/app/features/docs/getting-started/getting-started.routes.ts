import { IntroductionComponent } from './introduction/introduction.component';
import { LicenseComponent } from './license/license.component';
import { QuickstartComponent } from './quickstart/quickstart.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full',
  },
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'license',
    component: LicenseComponent,
  },
  {
    path: 'quickstart',
    component: QuickstartComponent,
  },
] as Routes;
