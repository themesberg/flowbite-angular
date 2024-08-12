import { OverrideBaseStyleComponent } from './override-base-style/override-base-style.component';
import { ThemingComponent } from './theming/theming.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'theming',
    component: ThemingComponent,
  },
  {
    path: 'override-base-style',
    component: OverrideBaseStyleComponent,
  },
] as Routes;
