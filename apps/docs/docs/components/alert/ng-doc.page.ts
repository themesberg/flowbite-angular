import ComponentCategory from '../ng-doc.category';
import { FlowbiteBorderAccentComponent } from './_border-accent.component';
import { FlowbiteBorderComponent } from './_border.component';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteDismissableComponent } from './_dismissable.component';
import { FlowbiteIconComponent } from './_icon.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Alert: NgDocPage = {
  title: 'Alert',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteIconComponent: FlowbiteIconComponent,
    flowbiteBorderComponent: FlowbiteBorderComponent,
    flowbiteBorderAccentComponent: FlowbiteBorderAccentComponent,
    flowbiteDismissableComponent: FlowbiteDismissableComponent,
  },
};

export default Alert;
