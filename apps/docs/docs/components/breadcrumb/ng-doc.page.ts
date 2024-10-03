import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './default.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Show the location of the current page in a hierarchical structure using the Tailwind CSS breadcrumb components
 */
const breadcrumb: NgDocPage = {
  title: 'Breadcrumb',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 4,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
};

export default breadcrumb;
