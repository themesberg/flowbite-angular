import type { TableFoot } from './table-foot.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTableFootStateToken = createStateToken<TableFoot>('Flowbite TableFoot');
export const provideFlowbiteTableFootState = createStateProvider(FlowbiteTableFootStateToken);
export const injectFlowbiteTableFootState = createStateInjector(FlowbiteTableFootStateToken);
export const flowbiteTableFootState = createState(FlowbiteTableFootStateToken);
