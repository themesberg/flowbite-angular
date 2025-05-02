import type { FlowbiteBreadcrumbItemComponent } from './breadcrumb-item.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteBreadcrumbItemStateToken = createStateToken<FlowbiteBreadcrumbItemComponent>(
  'Flowbite Breadcrumb Item'
);
export const provideFlowbiteBreadcrumbItemState = createStateProvider(
  FlowbiteBreadcrumbItemStateToken
);
export const injectFlowbiteBreadcrumbItemState = createStateInjector(
  FlowbiteBreadcrumbItemStateToken
);
export const flowbiteBreadcrumbItemState = createState(FlowbiteBreadcrumbItemStateToken);
