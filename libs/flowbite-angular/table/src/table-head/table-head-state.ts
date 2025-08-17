import type { TableHead } from './table-head.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTableHeadStateToken = createStateToken<TableHead>('Flowbite TableHead');
export const provideFlowbiteTableHeadState = createStateProvider(FlowbiteTableHeadStateToken);
export const injectFlowbiteTableHeadState = createStateInjector(FlowbiteTableHeadStateToken);
export const flowbiteTableHeadState = createState(FlowbiteTableHeadStateToken);
