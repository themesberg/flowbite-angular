import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './default.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use the sidebar component to show a list of menu items and multi-level menu items to navigate on your website
 */
const sidebar: NgDocPage = {
  title: 'Sidebar',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 9,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
};

export default sidebar;
