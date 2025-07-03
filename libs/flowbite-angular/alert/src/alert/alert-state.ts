import type { Alert } from './alert.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAlertStateToken = createStateToken<Alert>('Flowbite Alert');
export const provideFlowbiteAlertState = createStateProvider(FlowbiteAlertStateToken);
export const injectFlowbiteAlertState = createStateInjector(FlowbiteAlertStateToken);
export const flowbiteAlertState = createState(FlowbiteAlertStateToken);
