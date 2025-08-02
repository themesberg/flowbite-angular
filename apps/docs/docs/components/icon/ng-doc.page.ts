import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import { flowbiteIconTheme } from 'flowbite-angular/icon';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Icon: NgDocPage = {
  title: 'Icon',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [{ title: 'Icon', content: toIndentedJson(flowbiteIconTheme) }] satisfies DocThemes,
  },
};

export default Icon;
