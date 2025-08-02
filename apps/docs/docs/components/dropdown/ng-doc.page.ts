import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import {
  flowbiteDropdownContentTheme,
  flowbiteDropdownItemTheme,
  flowbiteDropdownTheme,
} from 'flowbite-angular/dropdown';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Dropdown: NgDocPage = {
  title: 'Dropdown',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [
      { title: 'Dropdown content', content: toIndentedJson(flowbiteDropdownContentTheme) },
      { title: 'Dropdown item', content: toIndentedJson(flowbiteDropdownItemTheme) },
      { title: 'Dropdown', content: toIndentedJson(flowbiteDropdownTheme) },
    ] satisfies DocThemes,
  },
};

export default Dropdown;
