import type { FlowbiteIndicator } from './indicator.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteIndicatorStateToken =
  createStateToken<FlowbiteIndicator>('Flowbite Indicator');
export const provideFlowbiteIndicatorState = createStateProvider(FlowbiteIndicatorStateToken);
export const injectFlowbiteIndicatorState = createStateInjector(FlowbiteIndicatorStateToken);
export const flowbiteIndicatorState = createState(FlowbiteIndicatorStateToken);
