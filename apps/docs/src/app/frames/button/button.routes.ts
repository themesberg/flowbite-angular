import { FlowbiteFrameButtonDefaultComponent } from './default.component';
import { FlowbiteFrameButtonDisabledComponent } from './disabled.component';
import { FlowbiteFrameButtonGradientDuotoneComponent } from './gradient-duotone.component';
import { FlowbiteFrameButtonGradientMonochromeComponent } from './gradient-monochrome.component';
import { FlowbiteFrameButtonGradientOutlineComponent } from './gradient-outline.component';
import { FlowbiteFrameButtonIconOnlyComponent } from './icon-only.component';
import { FlowbiteFrameButtonIconComponent } from './icon.component';
import { FlowbiteFrameButtonLabelComponent } from './label.component';
import { FlowbiteFrameButtonOutlineComponent } from './outline.component';
import { FlowbiteFrameButtonPillComponent } from './pill.component';
import { FlowbiteFrameButtonSizeComponent } from './size.component';

import type { Routes } from '@angular/router';

export default [
  {
    path: 'default',
    component: FlowbiteFrameButtonDefaultComponent,
  },
  {
    path: 'disabled',
    component: FlowbiteFrameButtonDisabledComponent,
  },
  {
    path: 'gradient-duotone',
    component: FlowbiteFrameButtonGradientDuotoneComponent,
  },
  {
    path: 'gradient-monochrome',
    component: FlowbiteFrameButtonGradientMonochromeComponent,
  },
  {
    path: 'gradient-outline',
    component: FlowbiteFrameButtonGradientOutlineComponent,
  },
  {
    path: 'icon-only',
    component: FlowbiteFrameButtonIconOnlyComponent,
  },
  {
    path: 'icon',
    component: FlowbiteFrameButtonIconComponent,
  },
  {
    path: 'label',
    component: FlowbiteFrameButtonLabelComponent,
  },
  {
    path: 'outline',
    component: FlowbiteFrameButtonOutlineComponent,
  },
  {
    path: 'pill',
    component: FlowbiteFrameButtonPillComponent,
  },
  {
    path: 'size',
    component: FlowbiteFrameButtonSizeComponent,
  },
] as Routes;
