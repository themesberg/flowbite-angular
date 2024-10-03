import ComponentCategory from '../ng-doc.category';
import { FlowbiteCountComponent } from './count.component';
import { FlowbiteDefaultComponent } from './default.component';
import { FlowbiteLegendComponent } from './legend.component';
import { FlowbitePositionedComponent } from './positioned.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use the indicator component to show a number count, account status, or as a loading label positioned relative to the parent component coded with Tailwind CSS
 */
const indicator: NgDocPage = {
  title: 'Indicator',
  mdFile: './index.md',
  category: ComponentCategory,
  order: 7,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteCountComponent: FlowbiteCountComponent,
    flowbiteLegendComponent: FlowbiteLegendComponent,
    flowbitePositionedComponent: FlowbitePositionedComponent,
  },
};

export default indicator;
