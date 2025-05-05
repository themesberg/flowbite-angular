import type { FlowbiteNavbarComponent } from './navbar.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarStateToken =
  createStateToken<FlowbiteNavbarComponent>('Flowbite Navbar');
export const provideFlowbiteNavbarState = createStateProvider(FlowbiteNavbarStateToken);
export const injectFlowbiteNavbarState = createStateInjector(FlowbiteNavbarStateToken);
export const flowbiteNavbarState = createState(FlowbiteNavbarStateToken);
