import type { FlowbiteBreadcrumb } from './breadcrumb.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteBreadcrumbStateToken =
  createStateToken<FlowbiteBreadcrumb>('Flowbite Breadcrumb');
export const provideFlowbiteBreadcrumbState = createStateProvider(FlowbiteBreadcrumbStateToken);
export const injectFlowbiteBreadcrumbState = createStateInjector(FlowbiteBreadcrumbStateToken);
export const flowbiteBreadcrumbState = createState(FlowbiteBreadcrumbStateToken);
