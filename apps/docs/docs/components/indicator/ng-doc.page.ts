import ComponentCategory from '../ng-doc.category';
import { FlowbiteCountComponent } from './count.component';
import { FlowbiteDefaultComponent } from './default.component';
import { FlowbiteLegendComponent } from './legend.component';
import { FlowbitePositionedComponent } from './positioned.component';

import type { NgDocPage } from '@ng-doc/core';

const indicator: NgDocPage = {
  title: 'Indicator',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 5,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteCountComponent: FlowbiteCountComponent,
    flowbiteLegendComponent: FlowbiteLegendComponent,
    flowbitePositionedComponent: FlowbitePositionedComponent,
  },
};

export default indicator;
