import type { Indicator } from './indicator.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteIndicatorStateToken = createStateToken<Indicator>('Flowbite Indicator');
export const provideFlowbiteIndicatorState = createStateProvider(FlowbiteIndicatorStateToken);
export const injectFlowbiteIndicatorState = createStateInjector(FlowbiteIndicatorStateToken);
export const flowbiteIndicatorState = createState(FlowbiteIndicatorStateToken);
