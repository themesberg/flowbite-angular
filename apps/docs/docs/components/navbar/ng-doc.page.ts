import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteBrandComponent } from './_brand.component';
import { FlowbiteDropdownComponent } from './_dropdown.component';
import { FlowbiteResponsiveComponent } from './_responsive.component';

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
    flowbiteBrandComponent: FlowbiteBrandComponent,
    flowbiteDropdownComponent: FlowbiteDropdownComponent,
    flowbiteResponsiveComponent: FlowbiteResponsiveComponent,
  },
};

export default navbar;
