import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Navbar: NgDocPage = {
  title: 'Navbar',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
};

export default Navbar;
