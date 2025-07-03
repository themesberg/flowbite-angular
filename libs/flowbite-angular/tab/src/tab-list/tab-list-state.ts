import type { TabList } from './tab-list.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTabListStateToken = createStateToken<TabList>('Flowbite TabList');
export const provideFlowbiteTabListState = createStateProvider(FlowbiteTabListStateToken);
export const injectFlowbiteTabListState = createStateInjector(FlowbiteTabListStateToken);
export const flowbiteTabListState = createState(FlowbiteTabListStateToken);
