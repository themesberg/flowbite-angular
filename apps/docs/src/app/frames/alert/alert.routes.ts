import { FlowbiteFrameAlertAdditionalContentComponent } from './additional-content.component';
import { FlowbiteFrameAlertBorderComponent } from './border.component';
import { FlowbiteFrameAlertDefaultComponent } from './default.component';
import { FlowbiteFrameAlertDismissableComponent } from './dismissable.component';
import { FlowbiteFrameAlertIconComponent } from './icon.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'additional-content',
    component: FlowbiteFrameAlertAdditionalContentComponent,
  },
  {
    path: 'border',
    component: FlowbiteFrameAlertBorderComponent,
  },
  {
    path: 'default',
    component: FlowbiteFrameAlertDefaultComponent,
  },
  {
    path: 'dismissable',
    component: FlowbiteFrameAlertDismissableComponent,
  },
  {
    path: 'icon',
    component: FlowbiteFrameAlertIconComponent,
  },
] as Routes;
