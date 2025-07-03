import type { Navbar } from './navbar.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarStateToken = createStateToken<Navbar>('Flowbite Navbar');
export const provideFlowbiteNavbarState = createStateProvider(FlowbiteNavbarStateToken);
export const injectFlowbiteNavbarState = createStateInjector(FlowbiteNavbarStateToken);
export const flowbiteNavbarState = createState(FlowbiteNavbarStateToken);
