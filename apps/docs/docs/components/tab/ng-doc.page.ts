import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import {
  flowbiteTabButtonTheme,
  flowbiteTabContentTheme,
  flowbiteTabListTheme,
  flowbiteTabTheme,
} from 'flowbite-angular/tab';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Tab: NgDocPage = {
  title: 'Tab',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [
      { title: 'Tab button', content: toIndentedJson(flowbiteTabButtonTheme) },
      { title: 'Tab content', content: toIndentedJson(flowbiteTabContentTheme) },
      { title: 'Tab list', content: toIndentedJson(flowbiteTabListTheme) },
      { title: 'Tab', content: toIndentedJson(flowbiteTabTheme) },
    ] as DocThemes,
  },
};

export default Tab;
