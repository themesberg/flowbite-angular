import type { FlowbiteNavbarToggle } from './navbar-toggle.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarToggleStateToken =
  createStateToken<FlowbiteNavbarToggle>('Flowbite NavbarToggle');
export const provideFlowbiteNavbarToggleState = createStateProvider(FlowbiteNavbarToggleStateToken);
export const injectFlowbiteNavbarToggleState = createStateInjector(FlowbiteNavbarToggleStateToken);
export const flowbiteNavbarToggleState = createState(FlowbiteNavbarToggleStateToken);
