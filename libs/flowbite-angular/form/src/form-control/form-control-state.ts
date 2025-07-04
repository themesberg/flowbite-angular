import type { FormControl } from './form-control.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteFormControlStateToken = createStateToken<FormControl>('Flowbite FormControl');
export const provideFlowbiteFormControlState = createStateProvider(FlowbiteFormControlStateToken);
export const injectFlowbiteFormControlState = createStateInjector(FlowbiteFormControlStateToken);
export const flowbiteFormControlState = createState(FlowbiteFormControlStateToken);
