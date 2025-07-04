import type { SidebarContent } from './sidebar-content.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteSidebarContentStateToken =
  createStateToken<SidebarContent>('Flowbite SidebarContent');
export const provideFlowbiteSidebarContentState = createStateProvider(
  FlowbiteSidebarContentStateToken
);
export const injectFlowbiteSidebarContentState = createStateInjector(
  FlowbiteSidebarContentStateToken
);
export const flowbiteSidebarContentState = createState(FlowbiteSidebarContentStateToken);
