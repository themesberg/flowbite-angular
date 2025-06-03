import type { FlowbiteAlert } from './alert.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAlertStateToken = createStateToken<FlowbiteAlert>('Flowbite Alert');
export const provideFlowbiteAlertState = createStateProvider(FlowbiteAlertStateToken);
export const injectFlowbiteAlertState = createStateInjector(FlowbiteAlertStateToken);
export const flowbiteAlertState = createState(FlowbiteAlertStateToken);
