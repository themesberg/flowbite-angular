import ComponentCategory from '../ng-doc.category';
import { FlowbiteBorderComponent } from './_border.component';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteDismissComponent } from './_dismiss.component';
import { FlowbiteIconComponent } from './_icon.component';
import { FlowbiteLinkComponent } from './_link.component';
import { FlowbiteSmallComponent } from './_small.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Badge: NgDocPage = {
  title: 'Badge',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteSmallComponent: FlowbiteSmallComponent,
    flowbiteBorderComponent: FlowbiteBorderComponent,
    flowbiteLinkComponent: FlowbiteLinkComponent,
    flowbiteIconComponent: FlowbiteIconComponent,
    flowbiteDismissComponent: FlowbiteDismissComponent,
  },
};

export default Badge;
