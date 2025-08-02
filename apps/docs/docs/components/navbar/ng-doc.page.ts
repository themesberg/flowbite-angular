import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import {
  flowbiteNavbarBrandTheme,
  flowbiteNavbarContentTheme,
  flowbiteNavbarIconItemTheme,
  flowbiteNavbarItemTheme,
  flowbiteNavbarTheme,
  flowbiteNavbarToggleTheme,
} from 'flowbite-angular/navbar';

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
  data: {
    themes: [
      { title: 'Navbar brand', content: toIndentedJson(flowbiteNavbarBrandTheme) },
      { title: 'Navbar content', content: toIndentedJson(flowbiteNavbarContentTheme) },
      { title: 'Navbar icon item', content: toIndentedJson(flowbiteNavbarIconItemTheme) },
      { title: 'Navbar item', content: toIndentedJson(flowbiteNavbarItemTheme) },
      { title: 'Navbar', content: toIndentedJson(flowbiteNavbarTheme) },
      { title: 'Navbar toggle', content: toIndentedJson(flowbiteNavbarToggleTheme) },
    ] satisfies DocThemes,
  },
};

export default Navbar;
