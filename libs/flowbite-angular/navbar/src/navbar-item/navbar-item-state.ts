import type { FlowbiteNavbarItemComponent } from './navbar-item.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarItemStateToken =
  createStateToken<FlowbiteNavbarItemComponent>('Flowbite NavbarItem');
export const provideFlowbiteNavbarItemState = createStateProvider(FlowbiteNavbarItemStateToken);
export const injectFlowbiteNavbarItemState = createStateInjector(FlowbiteNavbarItemStateToken);
export const flowbiteNavbarItemState = createState(FlowbiteNavbarItemStateToken);
