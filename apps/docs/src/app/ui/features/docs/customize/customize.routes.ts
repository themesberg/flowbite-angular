import { OverrideBaseStyleComponent } from './override-base-style/override-base-style.component';
import { ThemingComponent } from './theming/theming.component';
import { UseCustomStyleComponent } from './use-custom-style/use-custom-style.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'theming',
    component: ThemingComponent,
    title: 'Customize - Theming',
  },
  {
    path: 'override-base-style',
    component: OverrideBaseStyleComponent,
    title: 'Customize - Overriding base style',
  },
  {
    path: 'use-custom-style',
    component: UseCustomStyleComponent,
    title: 'Customize - Use custom style',
  },
] as Routes;
