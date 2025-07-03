import type { Sidebar } from './sidebar.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteSidebarStateToken = createStateToken<Sidebar>('Flowbite Sidebar');
export const provideFlowbiteSidebarState = createStateProvider(FlowbiteSidebarStateToken);
export const injectFlowbiteSidebarState = createStateInjector(FlowbiteSidebarStateToken);
export const flowbiteSidebarState = createState(FlowbiteSidebarStateToken);
