import type { FlowbiteNavbarItem } from './navbar-item.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarItemStateToken =
  createStateToken<FlowbiteNavbarItem>('Flowbite NavbarItem');
export const provideFlowbiteNavbarItemState = createStateProvider(FlowbiteNavbarItemStateToken);
export const injectFlowbiteNavbarItemState = createStateInjector(FlowbiteNavbarItemStateToken);
export const flowbiteNavbarItemState = createState(FlowbiteNavbarItemStateToken);
