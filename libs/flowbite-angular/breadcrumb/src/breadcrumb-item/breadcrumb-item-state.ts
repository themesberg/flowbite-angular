import type { BreadcrumbItem } from './breadcrumb-item.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteBreadcrumbItemStateToken = createStateToken<BreadcrumbItem>(
  'Flowbite Breadcrumb Item'
);
export const provideFlowbiteBreadcrumbItemState = createStateProvider(
  FlowbiteBreadcrumbItemStateToken
);
export const injectFlowbiteBreadcrumbItemState = createStateInjector(
  FlowbiteBreadcrumbItemStateToken
);
export const flowbiteBreadcrumbItemState = createState(FlowbiteBreadcrumbItemStateToken);
