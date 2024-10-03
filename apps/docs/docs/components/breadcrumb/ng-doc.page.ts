import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './default.component';

import type { NgDocPage } from '@ng-doc/core';

const badge: NgDocPage = {
  title: 'Breadcrumb',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 4,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
};

export default badge;
