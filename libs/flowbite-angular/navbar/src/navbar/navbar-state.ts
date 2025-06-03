import type { FlowbiteNavbar } from './navbar.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarStateToken = createStateToken<FlowbiteNavbar>('Flowbite Navbar');
export const provideFlowbiteNavbarState = createStateProvider(FlowbiteNavbarStateToken);
export const injectFlowbiteNavbarState = createStateInjector(FlowbiteNavbarStateToken);
export const flowbiteNavbarState = createState(FlowbiteNavbarStateToken);
