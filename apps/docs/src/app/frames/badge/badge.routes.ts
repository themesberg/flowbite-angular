import { FlowbiteFrameBadgeDefaultComponent } from './default.component';
import { FlowbiteFrameBadgeIconOnlyComponent } from './icon-only.component';
import { FlowbiteFrameBadgeIconComponent } from './icon.component';
import { FlowbiteFrameBadgeLargeComponent } from './large.component';
import { FlowbiteFrameBadgeLinkComponent } from './link.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'default',
    component: FlowbiteFrameBadgeDefaultComponent,
  },
  {
    path: 'icon-only',
    component: FlowbiteFrameBadgeIconOnlyComponent,
  },
  {
    path: 'icon',
    component: FlowbiteFrameBadgeIconComponent,
  },
  {
    path: 'large',
    component: FlowbiteFrameBadgeLargeComponent,
  },
  {
    path: 'link',
    component: FlowbiteFrameBadgeLinkComponent,
  },
] as Routes;
