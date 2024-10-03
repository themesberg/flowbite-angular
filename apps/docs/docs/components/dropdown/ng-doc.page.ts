import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './default.component';
import { FlowbiteDividerComponent } from './divider.component';
import { FlowbiteHeaderComponent } from './header.component';
import { FlowbitePlacedComponent } from './placed.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles, and placements
 */
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
