import type { FlowbiteAlertDirective } from './alert.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAlertStateToken = createStateToken<FlowbiteAlertDirective>('Flowbite Alert');
export const provideFlowbiteAlertState = createStateProvider(FlowbiteAlertStateToken);
export const injectFlowbiteAlertState = createStateInjector(FlowbiteAlertStateToken);
export const flowbiteAlertState = createState(FlowbiteAlertStateToken);
