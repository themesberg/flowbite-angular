import ComponentCategory from '../ng-doc.category';
import { FlowbiteAlwaysOpenComponent } from './_always-open.component';
import { FlowbiteColorOptionComponent } from './_color-option.component';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteFlushComponent } from './_flush.component';

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
