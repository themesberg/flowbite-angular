import type { TableBody } from './table-body.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTableBodyStateToken = createStateToken<TableBody>('Flowbite TableBody');
export const provideFlowbiteTableBodyState = createStateProvider(FlowbiteTableBodyStateToken);
export const injectFlowbiteTableBodyState = createStateInjector(FlowbiteTableBodyStateToken);
export const flowbiteTableBodyState = createState(FlowbiteTableBodyStateToken);
