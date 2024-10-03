import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './default.component';
import { FlowbiteDisabledComponent } from './disabled.component';
import { FlowbiteGradientDuotoneComponent } from './gradient-duotone.component';
import { FlowbiteGradientMonochromeComponent } from './gradient-monochrome.component';
import { FlowbiteGradientOutlineComponent } from './gradient-outline.component';
import { FlowbiteIconOnlyComponent } from './icon-only.component';
import { FlowbiteIconComponent } from './icon.component';
import { FlowbiteLabelComponent } from './label.component';
import { FlowbiteOutlineComponent } from './outline.component';
import { FlowbitePillComponent } from './pill.component';
import { FlowbiteSizeComponent } from './size.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use the button component inside forms, as links with support for multiple styles, colors, sizes, gradients, and shadows
 */
const button: NgDocPage = {
  title: 'Button',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 5,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteDisabledComponent: FlowbiteDisabledComponent,
    flowbiteGradientDuotoneComponent: FlowbiteGradientDuotoneComponent,
    flowbiteGradientMonochromeComponent: FlowbiteGradientMonochromeComponent,
    flowbiteGradientOutlineComponent: FlowbiteGradientOutlineComponent,
    flowbiteIconOnlyComponent: FlowbiteIconOnlyComponent,
    flowbiteIconComponent: FlowbiteIconComponent,
    flowbiteLabelComponent: FlowbiteLabelComponent,
    flowbiteOutlineComponent: FlowbiteOutlineComponent,
    flowbitePillComponent: FlowbitePillComponent,
    flowbiteSizeComponent: FlowbiteSizeComponent,
  },
};

export default button;
