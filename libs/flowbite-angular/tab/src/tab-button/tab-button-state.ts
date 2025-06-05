import type { FlowbiteTabButton } from './tab-button.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTabButtonStateToken =
  createStateToken<FlowbiteTabButton>('Flowbite TabButton');
export const provideFlowbiteTabButtonState = createStateProvider(FlowbiteTabButtonStateToken);
export const injectFlowbiteTabButtonState = createStateInjector(FlowbiteTabButtonStateToken);
export const flowbiteTabButtonState = createState(FlowbiteTabButtonStateToken);
