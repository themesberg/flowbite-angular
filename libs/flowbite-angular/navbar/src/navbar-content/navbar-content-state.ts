import type { NavbarContent } from './navbar-content.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarContentStateToken =
  createStateToken<NavbarContent>('Flowbite NavbarContent');
export const provideFlowbiteNavbarContentState = createStateProvider(
  FlowbiteNavbarContentStateToken
);
export const injectFlowbiteNavbarContentState = createStateInjector(
  FlowbiteNavbarContentStateToken
);
export const flowbiteNavbarContentState = createState(FlowbiteNavbarContentStateToken);
