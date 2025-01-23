import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent as c_default } from './component/_default.component';
import { FlowbiteMultiLevelComponent as c_multilevel } from './component/_multi-level.component';
import { FlowbiteDefaultComponent as d_default } from './directive/_default.component';
import { FlowbiteMultiLevelComponent as d_multilevel } from './directive/_multi-level.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use the sidebar component to show a list of menu items and multi-level menu items to navigate on your website
 *
 * @status:alert BREAKING CHANGES
 */
const sidebar: NgDocPage = {
  title: 'Sidebar',
  mdFile: ['./index.md', './component.md'],
  category: ComponentCategory,
  order: 9,
  demos: {
    c_default: c_default,
    c_multilevel: c_multilevel,
    d_default: d_default,
    d_multilevel: d_multilevel,
  },
};

export default sidebar;
