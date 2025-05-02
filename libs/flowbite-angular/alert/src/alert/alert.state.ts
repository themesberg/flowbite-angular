import type { FlowbiteAlertComponent } from './alert.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAlertStateToken = createStateToken<FlowbiteAlertComponent>('Flowbite Alert');
export const provideFlowbiteAlertState = createStateProvider(FlowbiteAlertStateToken);
export const injectFlowbiteAlertState = createStateInjector(FlowbiteAlertStateToken);
export const flowbiteAlertState = createState(FlowbiteAlertStateToken);
