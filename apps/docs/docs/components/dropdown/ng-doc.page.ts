import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './default.component';
import { FlowbiteDividerComponent } from './divider.component';
import { FlowbiteHeaderComponent } from './header.component';
import { FlowbitePlacedComponent } from './placed.component';

import type { NgDocPage } from '@ng-doc/core';

const dropdown: NgDocPage = {
  title: 'Dropdown',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 6,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteDividerComponent: FlowbiteDividerComponent,
    flowbiteHeaderComponent: FlowbiteHeaderComponent,
    flowbitePlacedComponent: FlowbitePlacedComponent,
  },
};

export default dropdown;
