import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteDisabledComponent } from './_disabled.component';
import { FlowbiteIconComponent } from './_icon.component';
import { FlowbiteOutlineComponent } from './_outline.component';
import { FlowbitePillComponent } from './_pill.component';
import { FlowbiteSizeComponent } from './_size.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Button: NgDocPage = {
  title: 'Button',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbitePillComponent: FlowbitePillComponent,
    flowbiteOutlineComponent: FlowbiteOutlineComponent,
    flowbiteSizeComponent: FlowbiteSizeComponent,
    flowbiteIconComponent: FlowbiteIconComponent,
    flowbiteDisabledComponent: FlowbiteDisabledComponent,
  },
};

export default Button;
