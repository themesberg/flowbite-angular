import type { FlowbiteNavbarIconItem } from './navbar-icon-item.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteNavbarIconItemStateToken =
  createStateToken<FlowbiteNavbarIconItem>('Flowbite NavbarIconItem');
export const provideFlowbiteNavbarIconItemState = createStateProvider(
  FlowbiteNavbarIconItemStateToken
);
export const injectFlowbiteNavbarIconItemState = createStateInjector(
  FlowbiteNavbarIconItemStateToken
);
export const flowbiteNavbarIconItemState = createState(FlowbiteNavbarIconItemStateToken);
