import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Input: NgDocPage = {
  title: 'Input field',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
};

export default Input;
