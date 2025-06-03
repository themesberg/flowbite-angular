import type { FlowbiteBreadcrumbItem } from './breadcrumb-item.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteBreadcrumbItemStateToken = createStateToken<FlowbiteBreadcrumbItem>(
  'Flowbite Breadcrumb Item'
);
export const provideFlowbiteBreadcrumbItemState = createStateProvider(
  FlowbiteBreadcrumbItemStateToken
);
export const injectFlowbiteBreadcrumbItemState = createStateInjector(
  FlowbiteBreadcrumbItemStateToken
);
export const flowbiteBreadcrumbItemState = createState(FlowbiteBreadcrumbItemStateToken);
