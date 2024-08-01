import { FlowbiteFrameModalDefaultComponent } from './default.component';
import { FlowbiteFrameModalDismissableComponent } from './dismissable.component';
import { FlowbiteFrameModalFormComponent } from './form.component';
import { FlowbiteFrameModalPositionedComponent } from './positioned.component';
import { FlowbiteFrameModalSizeComponent } from './size.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'default',
    component: FlowbiteFrameModalDefaultComponent,
  },
  {
    path: 'dismissable',
    component: FlowbiteFrameModalDismissableComponent,
  },
  {
    path: 'form',
    component: FlowbiteFrameModalFormComponent,
  },
  {
    path: 'positioned',
    component: FlowbiteFrameModalPositionedComponent,
  },
  {
    path: 'size',
    component: FlowbiteFrameModalSizeComponent,
  },
] as Routes;
