import type { Breadcrumb } from './breadcrumb.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteBreadcrumbStateToken = createStateToken<Breadcrumb>('Flowbite Breadcrumb');
export const provideFlowbiteBreadcrumbState = createStateProvider(FlowbiteBreadcrumbStateToken);
export const injectFlowbiteBreadcrumbState = createStateInjector(FlowbiteBreadcrumbStateToken);
export const flowbiteBreadcrumbState = createState(FlowbiteBreadcrumbStateToken);
