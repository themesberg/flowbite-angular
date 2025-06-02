import type { FlowbiteBadgeDirective } from './badge.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteBadgeStateToken = createStateToken<FlowbiteBadgeDirective>('Flowbite Badge');
export const provideFlowbiteBadgeState = createStateProvider(FlowbiteBadgeStateToken);
export const injectFlowbiteBadgeState = createStateInjector(FlowbiteBadgeStateToken);
export const flowbiteBadgeState = createState(FlowbiteBadgeStateToken);
