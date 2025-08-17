import type { Table } from './table.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTableStateToken = createStateToken<Table>('Flowbite Table');
export const provideFlowbiteTableState = createStateProvider(FlowbiteTableStateToken);
export const injectFlowbiteTableState = createStateInjector(FlowbiteTableStateToken);
export const flowbiteTableState = createState(FlowbiteTableStateToken);
