import type { FlowbitePagination } from './pagination.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbitePaginationStateToken =
  createStateToken<FlowbitePagination>('Flowbite Pagination');
export const provideFlowbitePaginationState = createStateProvider(FlowbitePaginationStateToken);
export const injectFlowbitePaginationState = createStateInjector(FlowbitePaginationStateToken);
export const flowbitePaginationState = createState(FlowbitePaginationStateToken);
