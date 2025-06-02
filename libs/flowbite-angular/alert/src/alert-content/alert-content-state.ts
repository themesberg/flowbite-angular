import type { FlowbiteAlertContentDirective } from './alert-content.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAlertContentStateToken =
  createStateToken<FlowbiteAlertContentDirective>('Flowbite AlertContent');
export const provideFlowbiteAlertContentState = createStateProvider(FlowbiteAlertContentStateToken);
export const injectFlowbiteAlertContentState = createStateInjector(FlowbiteAlertContentStateToken);
export const flowbiteAlertContentState = createState(FlowbiteAlertContentStateToken);
