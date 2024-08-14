import { FlowbiteFrameAccordionAlwaysOpenComponent } from './always-open.component';
import { FlowbiteFrameAccordionDefaultComponent } from './default.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'default',
    component: FlowbiteFrameAccordionDefaultComponent,
  },
  {
    path: 'always-open',
    component: FlowbiteFrameAccordionAlwaysOpenComponent,
  },
] as Routes;
