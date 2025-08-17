import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import {
  flowbiteTableBodyTheme,
  flowbiteTableFootTheme,
  flowbiteTableHeadTheme,
  flowbiteTableTheme,
} from 'flowbite-angular/table';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Table: NgDocPage = {
  title: 'Table',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [
      { title: 'Table', content: toIndentedJson(flowbiteTableTheme) },
      { title: 'Table Head', content: toIndentedJson(flowbiteTableHeadTheme) },
      { title: 'Table Body', content: toIndentedJson(flowbiteTableBodyTheme) },
      { title: 'Table Foot', content: toIndentedJson(flowbiteTableFootTheme) },
    ] satisfies DocThemes,
  },
};

export default Table;
