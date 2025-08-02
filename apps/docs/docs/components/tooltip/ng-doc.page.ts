import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import { flowbiteTooltipTheme } from 'flowbite-angular/tooltip';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Tooltip: NgDocPage = {
  title: 'Tooltip',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [{ title: 'Tooltip', content: toIndentedJson(flowbiteTooltipTheme) }] as DocThemes,
  },
};

export default Tooltip;
