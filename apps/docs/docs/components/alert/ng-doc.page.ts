import ComponentCategory from '../ng-doc.category';
import { FlowbiteAdditionalContentComponent } from './additional-content.component';
import { FlowbiteBorderAccentComponent } from './border-accent.component';
import { FlowbiteBorderComponent } from './border.component';
import { FlowbiteDefaultComponent } from './default.component';
import { FlowbiteDismissableComponent } from './dismissable.component';
import { FlowbiteIconComponent } from './icon.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Show contextual information to your users using alert elements based on Tailwind CSS
 */
const Accordion: NgDocPage = {
  title: 'Alert',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 2,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteBorderAccentComponent: FlowbiteBorderAccentComponent,
    flowbiteBorderComponent: FlowbiteBorderComponent,
    flowbiteAdditionalContentComponent: FlowbiteAdditionalContentComponent,
    flowbiteDismissableComponent: FlowbiteDismissableComponent,
    flowbiteIconComponent: FlowbiteIconComponent,
  },
};

export default Accordion;
