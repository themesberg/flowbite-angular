import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import {
  flowbiteCardContentTheme,
  flowbiteCardHeaderTheme,
  flowbiteCardTheme,
} from 'flowbite-angular/card';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Card: NgDocPage = {
  title: 'Card',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [
      { title: 'Card content', content: toIndentedJson(flowbiteCardContentTheme) },
      { title: 'Card header', content: toIndentedJson(flowbiteCardHeaderTheme) },
      { title: 'Card', content: toIndentedJson(flowbiteCardTheme) },
    ] as DocThemes,
  },
};

export default Card;
