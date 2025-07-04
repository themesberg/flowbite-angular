import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Modal: NgDocPage = {
  title: 'Modal',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
};

export default Modal;
