import type { FlowbiteTabList } from './tab-list.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTabListStateToken = createStateToken<FlowbiteTabList>('Flowbite TabList');
export const provideFlowbiteTabListState = createStateProvider(FlowbiteTabListStateToken);
export const injectFlowbiteTabListState = createStateInjector(FlowbiteTabListStateToken);
export const flowbiteTabListState = createState(FlowbiteTabListStateToken);
