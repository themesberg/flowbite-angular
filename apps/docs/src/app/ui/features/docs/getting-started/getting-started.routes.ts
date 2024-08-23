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
    title: 'Gettings started - Introduction',
  },
  {
    path: 'license',
    component: LicenseComponent,
    title: 'Gettings started - License',
  },
  {
    path: 'quickstart',
    component: QuickstartComponent,
    title: 'Gettings started - Quickstart',
  },
] as Routes;
