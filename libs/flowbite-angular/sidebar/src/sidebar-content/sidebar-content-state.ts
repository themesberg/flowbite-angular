import type { FlowbiteSidebarContent } from './sidebar-content.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteSidebarContentStateToken =
  createStateToken<FlowbiteSidebarContent>('Flowbite SidebarContent');
export const provideFlowbiteSidebarContentState = createStateProvider(
  FlowbiteSidebarContentStateToken
);
export const injectFlowbiteSidebarContentState = createStateInjector(
  FlowbiteSidebarContentStateToken
);
export const flowbiteSidebarContentState = createState(FlowbiteSidebarContentStateToken);
