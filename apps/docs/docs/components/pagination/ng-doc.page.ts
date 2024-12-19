import ComponentCategory from '../ng-doc.category';
import { FlowbiteBothComponent } from './_both.component';
import { FlowbiteCustomComponent } from './_custom.component';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteTextComponent } from './_text.component';

import type { NgDocPage } from '@ng-doc/core';

const pagination: NgDocPage = {
  title: 'Pagination',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 10,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteTextComponent: FlowbiteTextComponent,
    flowbiteBothComponent: FlowbiteBothComponent,
    flowbiteCustomComponent: FlowbiteCustomComponent,
  },
};

export default pagination;
