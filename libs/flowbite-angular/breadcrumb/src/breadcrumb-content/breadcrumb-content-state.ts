import type { BreadcrumbContent } from './breadcrumb-content.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteBreadcrumbContentStateToken = createStateToken<BreadcrumbContent>(
  'Flowbite BreadcrumbContent'
);
export const provideFlowbiteBreadcrumbContentState = createStateProvider(
  FlowbiteBreadcrumbContentStateToken
);
export const injectFlowbiteBreadcrumbContentState = createStateInjector(
  FlowbiteBreadcrumbContentStateToken
);
export const flowbiteBreadcrumbContentState = createState(FlowbiteBreadcrumbContentStateToken);
