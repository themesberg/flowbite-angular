import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteDismissableComponent } from './_dismissable.component';
import { FlowbiteFormComponent } from './_form.component';
import { FlowbitePositionedComponent } from './_positioned.component';
import { FlowbiteSizeComponent } from './_size.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles
 */
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
