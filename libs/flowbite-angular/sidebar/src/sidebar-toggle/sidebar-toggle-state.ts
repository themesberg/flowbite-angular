import type { SidebarToggle } from './sidebar-toggle.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteSidebarToggleStateToken =
  createStateToken<SidebarToggle>('Flowbite SidebarToggle');
export const provideFlowbiteSidebarToggleState = createStateProvider(
  FlowbiteSidebarToggleStateToken
);
export const injectFlowbiteSidebarToggleState = createStateInjector(
  FlowbiteSidebarToggleStateToken
);
export const flowbiteSidebarToggleState = createState(FlowbiteSidebarToggleStateToken);
