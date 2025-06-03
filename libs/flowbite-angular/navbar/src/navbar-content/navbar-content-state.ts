import type { FlowbiteNavbarContent } from './navbar-content.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarContentStateToken =
  createStateToken<FlowbiteNavbarContent>('Flowbite NavbarContent');
export const provideFlowbiteNavbarContentState = createStateProvider(
  FlowbiteNavbarContentStateToken
);
export const injectFlowbiteNavbarContentState = createStateInjector(
  FlowbiteNavbarContentStateToken
);
export const flowbiteNavbarContentState = createState(FlowbiteNavbarContentStateToken);
