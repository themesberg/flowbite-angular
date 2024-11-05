import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteDisabledComponent } from './_disabled.component';
import { FlowbiteGradientDuotoneComponent } from './_gradient-duotone.component';
import { FlowbiteGradientMonochromeComponent } from './_gradient-monochrome.component';
import { FlowbiteGradientOutlineComponent } from './_gradient-outline.component';
import { FlowbiteIconOnlyComponent } from './_icon-only.component';
import { FlowbiteIconComponent } from './_icon.component';
import { FlowbiteLabelComponent } from './_label.component';
import { FlowbiteOutlineComponent } from './_outline.component';
import { FlowbitePillComponent } from './_pill.component';
import { FlowbiteSizeComponent } from './_size.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use the button component inside forms, as links with support for multiple styles, colors, sizes, gradients, and shadows
 *
 * @status:alert BREAKING CHANGES
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
