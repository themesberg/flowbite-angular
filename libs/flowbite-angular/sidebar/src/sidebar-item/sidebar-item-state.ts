import type { SidebarItem } from './sidebar-item.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteSidebarItemStateToken = createStateToken<SidebarItem>('Flowbite SidebarItem');
export const provideFlowbiteSidebarItemState = createStateProvider(FlowbiteSidebarItemStateToken);
export const injectFlowbiteSidebarItemState = createStateInjector(FlowbiteSidebarItemStateToken);
export const flowbiteSidebarItemState = createState(FlowbiteSidebarItemStateToken);
