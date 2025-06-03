import type { FlowbiteSidebar } from './sidebar.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteSidebarStateToken = createStateToken<FlowbiteSidebar>('Flowbite Sidebar');
export const provideFlowbiteSidebarState = createStateProvider(FlowbiteSidebarStateToken);
export const injectFlowbiteSidebarState = createStateInjector(FlowbiteSidebarStateToken);
export const flowbiteSidebarState = createState(FlowbiteSidebarStateToken);
