import type { FlowbiteButtonComponent } from './button.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from '@ng-primitives/state';

export const FlowbiteButtonStateToken = createStateToken<FlowbiteButtonComponent>;
export const provideFlowbiteButtonState = createStateProvider(FlowbiteButtonStateToken);
export const injectFlowbiteButtonState = createStateInjector(FlowbiteButtonStateToken);
export const flowbiteButtonState = createState(FlowbiteButtonStateToken);
