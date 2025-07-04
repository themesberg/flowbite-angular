import type { TabContent } from './tab-content.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTabContentStateToken = createStateToken<TabContent>('Flowbite TabContent');
export const provideFlowbiteTabContentState = createStateProvider(FlowbiteTabContentStateToken);
export const injectFlowbiteTabContentState = createStateInjector(FlowbiteTabContentStateToken);
export const flowbiteTabContentState = createState(FlowbiteTabContentStateToken);
