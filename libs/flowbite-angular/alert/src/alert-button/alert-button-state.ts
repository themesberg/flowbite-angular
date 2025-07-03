import type { AlertButton } from './alert-button.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAlertButtonStateToken = createStateToken<AlertButton>('Flowbite AlertButton');
export const provideFlowbiteAlertButtonState = createStateProvider(FlowbiteAlertButtonStateToken);
export const injectFlowbiteAlertButtonState = createStateInjector(FlowbiteAlertButtonStateToken);
export const flowbiteAlertButtonState = createState(FlowbiteAlertButtonStateToken);
