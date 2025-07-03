import type { NavbarIconItem } from './navbar-icon-item.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarIconItemStateToken =
  createStateToken<NavbarIconItem>('Flowbite NavbarIconItem');
export const provideFlowbiteNavbarIconItemState = createStateProvider(
  FlowbiteNavbarIconItemStateToken
);
export const injectFlowbiteNavbarIconItemState = createStateInjector(
  FlowbiteNavbarIconItemStateToken
);
export const flowbiteNavbarIconItemState = createState(FlowbiteNavbarIconItemStateToken);
