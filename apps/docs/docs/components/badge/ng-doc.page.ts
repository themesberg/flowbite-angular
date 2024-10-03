import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './default.component';
import { FlowbiteIconOnlyComponent } from './icon-only.component';
import { FlowbiteIconComponent } from './icon.component';
import { FlowbiteLargeComponent } from './large.component';
import { FlowbiteLinkComponent } from './link.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
 */
const badge: NgDocPage = {
  title: 'Badge',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 3,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteIconOnlyComponent: FlowbiteIconOnlyComponent,
    flowbiteIconComponent: FlowbiteIconComponent,
    flowbiteLargeComponent: FlowbiteLargeComponent,
    flowbiteLinkComponent: FlowbiteLinkComponent,
  },
};

export default badge;
