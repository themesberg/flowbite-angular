import type { FlowbiteIconComponent } from './icon.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteIconStateToken = createStateToken<FlowbiteIconComponent>('Flowbite Icon');
export const provideFlowbiteIconState = createStateProvider(FlowbiteIconStateToken);
export const injectFlowbiteIconState = createStateInjector(FlowbiteIconStateToken);
export const flowbiteIconState = createState(FlowbiteIconStateToken);
