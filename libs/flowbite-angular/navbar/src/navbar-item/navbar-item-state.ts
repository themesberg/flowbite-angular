import type { NavbarItem } from './navbar-item.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarItemStateToken = createStateToken<NavbarItem>('Flowbite NavbarItem');
export const provideFlowbiteNavbarItemState = createStateProvider(FlowbiteNavbarItemStateToken);
export const injectFlowbiteNavbarItemState = createStateInjector(FlowbiteNavbarItemStateToken);
export const flowbiteNavbarItemState = createState(FlowbiteNavbarItemStateToken);
