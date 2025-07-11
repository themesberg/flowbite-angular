import ComponentCategory from '../ng-doc.category';
import { FlowbiteAlwaysOpenComponent } from './_always-open.component';
import { FlowbiteColorComponent } from './_color.component';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteFlushComponent } from './_flush.component';
import { FlowbiteIconComponent } from './_icon.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use the accordion component to show hidden information based on the collapse and expand state of the child elements
 */
const Accordion: NgDocPage = {
  title: 'Accordion',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteAlwaysOpenComponent: FlowbiteAlwaysOpenComponent,
    flowbiteColorComponent: FlowbiteColorComponent,
    flowbiteFlushComponent: FlowbiteFlushComponent,
    flowbiteIconComponent: FlowbiteIconComponent,
  },
};

export default Accordion;
