import type { FormField } from './form-field.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteFormFieldStateToken = createStateToken<FormField>('Flowbite FormField');
export const provideFlowbiteFormFieldState = createStateProvider(FlowbiteFormFieldStateToken);
export const injectFlowbiteFormFieldState = createStateInjector(FlowbiteFormFieldStateToken);
export const flowbiteFormFieldState = createState(FlowbiteFormFieldStateToken);
