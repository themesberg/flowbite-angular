import type { FlowbitePaginationComponent } from './pagination.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbitePaginationStateToken =
  createStateToken<FlowbitePaginationComponent>('Flowbite Pagination');
export const provideFlowbitePaginationState = createStateProvider(FlowbitePaginationStateToken);
export const injectFlowbitePaginationState = createStateInjector(FlowbitePaginationStateToken);
export const flowbitePaginationState = createState(FlowbitePaginationStateToken);
