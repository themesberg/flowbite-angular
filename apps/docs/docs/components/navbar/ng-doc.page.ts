import ComponentCategory from '../ng-doc.category';
import { FlowbiteBrandComponent as c_brand } from './component/_brand.component';
import { FlowbiteDefaultComponent as c_default } from './component/_default.component';
import { FlowbiteDropdownComponent as c_dropdown } from './component/_dropdown.component';
import { FlowbiteResponsiveComponent as c_responsive } from './component/_responsive.component';
import { FlowbiteBrandComponent as d_brand } from './directive/_brand.component';
import { FlowbiteDefaultComponent as d_default } from './directive/_default.component';
import { FlowbiteDropdownComponent as d_dropdown } from './directive/_dropdown.component';
import { FlowbiteResponsiveComponent as d_responsive } from './directive/_responsive.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns
 *
 * @status:alert BREAKING CHANGES
 */
const navbar: NgDocPage = {
  title: 'Navbar',
  mdFile: ['./index.md', './component.md'],
  category: ComponentCategory,
  order: 10,
  demos: {
    c_brand: c_brand,
    c_default: c_default,
    c_dropdown: c_dropdown,
    c_responsive: c_responsive,
    d_brand: d_brand,
    d_default: d_default,
    d_dropdown: d_dropdown,
    d_responsive: d_responsive,
  },
};

export default navbar;
