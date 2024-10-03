import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './default.component';
import { FlowbiteDismissableComponent } from './dismissable.component';
import { FlowbiteFormComponent } from './form.component';
import { FlowbitePositionedComponent } from './positioned.component';
import { FlowbiteSizeComponent } from './size.component';

import type { NgDocPage } from '@ng-doc/core';

const modal: NgDocPage = {
  title: 'Modal',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 8,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteDismissableComponent: FlowbiteDismissableComponent,
    flowbiteFormComponent: FlowbiteFormComponent,
    flowbitePositionedComponent: FlowbitePositionedComponent,
    flowbiteSizeComponent: FlowbiteSizeComponent,
  },
};

export default modal;
