import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import { flowbiteClipboardTheme } from 'flowbite-angular/clipboard';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Clipboard: NgDocPage = {
  title: 'Clipboard',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [{ title: 'Clipboard', content: toIndentedJson(flowbiteClipboardTheme) }] as DocThemes,
  },
};

export default Clipboard;
