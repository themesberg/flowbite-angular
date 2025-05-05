import type { FlowbiteNavbarContentComponent } from './navbar-content.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarContentStateToken =
  createStateToken<FlowbiteNavbarContentComponent>('Flowbite NavbarContent');
export const provideFlowbiteNavbarContentState = createStateProvider(
  FlowbiteNavbarContentStateToken
);
export const injectFlowbiteNavbarContentState = createStateInjector(
  FlowbiteNavbarContentStateToken
);
export const flowbiteNavbarContentState = createState(FlowbiteNavbarContentStateToken);
