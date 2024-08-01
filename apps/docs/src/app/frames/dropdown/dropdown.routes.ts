import { FlowbiteFrameDropdownDefaultComponent } from './default.component';
import { FlowbiteFrameDropdownDividerComponent } from './divider.component';
import { FlowbiteFrameDropdownHeaderComponent } from './header.component';
import { FlowbiteFrameDropdownPlacedComponent } from './placed.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'default',
    component: FlowbiteFrameDropdownDefaultComponent,
  },
  {
    path: 'divider',
    component: FlowbiteFrameDropdownDividerComponent,
  },
  {
    path: 'header',
    component: FlowbiteFrameDropdownHeaderComponent,
  },
  {
    path: 'placed',
    component: FlowbiteFrameDropdownPlacedComponent,
  },
] as Routes;
