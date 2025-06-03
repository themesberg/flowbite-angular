import type { FlowbiteSidebarItem } from './sidebar-item.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteSidebarItemStateToken =
  createStateToken<FlowbiteSidebarItem>('Flowbite SidebarItem');
export const provideFlowbiteSidebarItemState = createStateProvider(FlowbiteSidebarItemStateToken);
export const injectFlowbiteSidebarItemState = createStateInjector(FlowbiteSidebarItemStateToken);
export const flowbiteSidebarItemState = createState(FlowbiteSidebarItemStateToken);
