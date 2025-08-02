import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import { flowbiteIndicatorTheme } from 'flowbite-angular/indicator';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Indicator: NgDocPage = {
  title: 'Indicator',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [{ title: 'Indicator', content: toIndentedJson(flowbiteIndicatorTheme) }] as DocThemes,
  },
};

export default Indicator;
