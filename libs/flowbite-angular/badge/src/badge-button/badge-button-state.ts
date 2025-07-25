import type { BadgeButton } from './badge-button.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteBadgeButtonStateToken = createStateToken<BadgeButton>('Flowbite BadgeButton');
export const provideFlowbiteBadgeButtonState = createStateProvider(FlowbiteBadgeButtonStateToken);
export const injectFlowbiteBadgeButtonState = createStateInjector(FlowbiteBadgeButtonStateToken);
export const flowbiteBadgeButtonState = createState(FlowbiteBadgeButtonStateToken);
