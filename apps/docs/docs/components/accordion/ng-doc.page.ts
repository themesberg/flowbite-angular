import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './default.component';

import type { NgDocPage } from '@ng-doc/core';

const Accordion: NgDocPage = {
  title: 'Accordion',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 1,
  demos: { FlowbiteDefaultComponent: FlowbiteDefaultComponent },
};

export default Accordion;
