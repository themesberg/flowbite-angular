import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteIconOnlyComponent } from './_icon-only.component';
import { FlowbiteIconComponent } from './_icon.component';
import { FlowbiteLargeComponent } from './_large.component';
import { FlowbiteLinkComponent } from './_link.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
 *
 * @status:alert BREAKING CHANGES
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
