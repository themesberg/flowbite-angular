import { FlowbiteFrameAccordionAlwaysOpenComponent } from './always-open.component';
import { FlowbiteFrameAccordionColorOptionComponent } from './color-option.component';
import { FlowbiteFrameAccordionDefaultComponent } from './default.component';
import { FlowbiteFrameAccordionFlushComponent } from './flush.component';

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
  {
    path: 'color-option',
    component: FlowbiteFrameAccordionColorOptionComponent,
  },
  {
    path: 'flush',
    component: FlowbiteFrameAccordionFlushComponent,
  },
] as Routes;
