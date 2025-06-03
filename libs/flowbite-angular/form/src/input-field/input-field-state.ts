import type { FlowbiteInputField } from './input-field.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteInputFieldStateToken =
  createStateToken<FlowbiteInputField>('Flowbite InputField');
export const provideFlowbiteInputFieldState = createStateProvider(FlowbiteInputFieldStateToken);
export const injectFlowbiteInputFieldState = createStateInjector(FlowbiteInputFieldStateToken);
export const flowbiteInputFieldState = createState(FlowbiteInputFieldStateToken);
