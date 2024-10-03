import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './default.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns
 */
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
