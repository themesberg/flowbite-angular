import type { FlowbiteTab } from './tab.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTabStateToken = createStateToken<FlowbiteTab>('Flowbite Tab');
export const provideFlowbiteTabState = createStateProvider(FlowbiteTabStateToken);
export const injectFlowbiteTabState = createStateInjector(FlowbiteTabStateToken);
export const flowbiteTabState = createState(FlowbiteTabStateToken);
