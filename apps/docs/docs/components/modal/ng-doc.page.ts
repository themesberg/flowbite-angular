import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteOpenprogramaticallyComponent } from './_open-programatically.component';
import { FlowbitePositionComponent } from './_position.component';

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
    flowbiteOpenprogramaticallyComponent: FlowbiteOpenprogramaticallyComponent,
    flowbitePositionComponent: FlowbitePositionComponent,
  },
};

export default Modal;
