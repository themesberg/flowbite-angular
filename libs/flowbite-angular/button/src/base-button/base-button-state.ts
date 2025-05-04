import type { FlowbiteBaseButtonDirective } from './base-button.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteBaseButtonStateToken =
  createStateToken<FlowbiteBaseButtonDirective>('Flowbite BaseButton');
export const provideFlowbiteBaseButtonState = createStateProvider(FlowbiteBaseButtonStateToken);
export const injectFlowbiteBaseButtonState = createStateInjector(FlowbiteBaseButtonStateToken);
export const flowbiteBaseButtonState = createState(FlowbiteBaseButtonStateToken);
