import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import {
  flowbiteSidebarContentTheme,
  flowbiteSidebarItemTheme,
  flowbiteSidebarTheme,
  flowbiteSidebarToggleTheme,
} from 'flowbite-angular/sidebar';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Sidebar: NgDocPage = {
  title: 'Sidebar',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [
      { title: 'Sidebar content', content: toIndentedJson(flowbiteSidebarContentTheme) },
      { title: 'Sidebar item', content: toIndentedJson(flowbiteSidebarItemTheme) },
      { title: 'Sidebar', content: toIndentedJson(flowbiteSidebarTheme) },
      { title: 'Sidebar toggle', content: toIndentedJson(flowbiteSidebarToggleTheme) },
    ] satisfies DocThemes,
  },
};

export default Sidebar;
