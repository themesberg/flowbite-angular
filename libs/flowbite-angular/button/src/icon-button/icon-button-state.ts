import type { FlowbiteIconButtonComponent } from './icon-button.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteIconButtonStateToken =
  createStateToken<FlowbiteIconButtonComponent>('Flowbite IconButton');
export const provideFlowbiteIconButtonState = createStateProvider(FlowbiteIconButtonStateToken);
export const injectFlowbiteIconButtonState = createStateInjector(FlowbiteIconButtonStateToken);
export const flowbiteIconButtonState = createState(FlowbiteIconButtonStateToken);
