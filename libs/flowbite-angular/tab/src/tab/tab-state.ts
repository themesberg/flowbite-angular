import type { Tab } from './tab.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTabStateToken = createStateToken<Tab>('Flowbite Tab');
export const provideFlowbiteTabState = createStateProvider(FlowbiteTabStateToken);
export const injectFlowbiteTabState = createStateInjector(FlowbiteTabStateToken);
export const flowbiteTabState = createState(FlowbiteTabStateToken);
