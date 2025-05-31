import type { FlowbiteIconButtonDirective } from './icon-button.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteIconButtonStateToken =
  createStateToken<FlowbiteIconButtonDirective>('Flowbite IconButton');
export const provideFlowbiteIconButtonState = createStateProvider(FlowbiteIconButtonStateToken);
export const injectFlowbiteIconButtonState = createStateInjector(FlowbiteIconButtonStateToken);
export const flowbiteIconButtonState = createState(FlowbiteIconButtonStateToken);
