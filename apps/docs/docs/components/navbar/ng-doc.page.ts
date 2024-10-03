import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './default.component';

import type { NgDocPage } from '@ng-doc/core';

const navbar: NgDocPage = {
  title: 'Navbar',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 10,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
};

export default navbar;
