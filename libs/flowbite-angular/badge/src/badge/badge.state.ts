import type { FlowbiteBadgeComponent } from './badge.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteBadgeStateToken = createStateToken<FlowbiteBadgeComponent>('Flowbite Badge');
export const provideFlowbiteBadgeState = createStateProvider(FlowbiteBadgeStateToken);
export const injectFlowbiteBadgeState = createStateInjector(FlowbiteBadgeStateToken);
export const flowbiteBadgeState = createState(FlowbiteBadgeStateToken);
