import ComponentCategory from '../ng-doc.category';
import { FlowbiteAlwaysOpenComponent } from './always-open.component';
import { FlowbiteColorOptionComponent } from './color-option.component';
import { FlowbiteDefaultComponent } from './default.component';
import { FlowbiteFlushComponent } from './flush.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use the accordion component to show hidden information based on the collapse and expand state of the child elements
 */
const Accordion: NgDocPage = {
  title: 'Accordion',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 1,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteAlwaysOpenComponent: FlowbiteAlwaysOpenComponent,
    flowbiteColorOptionComponent: FlowbiteColorOptionComponent,
    flowbiteFlushComponent: FlowbiteFlushComponent,
  },
};

export default Accordion;
