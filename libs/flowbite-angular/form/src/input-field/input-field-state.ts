import type { FlowbiteInputFieldComponent } from './input-field.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteInputFieldStateToken =
  createStateToken<FlowbiteInputFieldComponent>('Flowbite InputField');
export const provideFlowbiteInputFieldState = createStateProvider(FlowbiteInputFieldStateToken);
export const injectFlowbiteInputFieldState = createStateInjector(FlowbiteInputFieldStateToken);
export const flowbiteInputFieldState = createState(FlowbiteInputFieldStateToken);
