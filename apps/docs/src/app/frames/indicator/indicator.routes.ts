import { FlowbiteFrameIndicatorCountComponent } from './count.component';
import { FlowbiteFrameIndicatorDefaultComponent } from './default.component';
import { FlowbiteFrameIndicatorLegendComponent } from './legend.component';
import { FlowbiteFrameIndicatorPositionedComponent } from './positioned.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'count',
    component: FlowbiteFrameIndicatorCountComponent,
  },
  {
    path: 'default',
    component: FlowbiteFrameIndicatorDefaultComponent,
  },
  {
    path: 'legend',
    component: FlowbiteFrameIndicatorLegendComponent,
  },
  {
    path: 'positioned',
    component: FlowbiteFrameIndicatorPositionedComponent,
  },
] as Routes;
