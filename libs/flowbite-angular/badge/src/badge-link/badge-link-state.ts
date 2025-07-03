import type { BadgeLink } from './badge-link.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteBadgeLinkStateToken = createStateToken<BadgeLink>('Flowbite BadgeLink');
export const provideFlowbiteBadgeLinkState = createStateProvider(FlowbiteBadgeLinkStateToken);
export const injectFlowbiteBadgeLinkState = createStateInjector(FlowbiteBadgeLinkStateToken);
export const flowbiteBadgeLinkState = createState(FlowbiteBadgeLinkStateToken);
