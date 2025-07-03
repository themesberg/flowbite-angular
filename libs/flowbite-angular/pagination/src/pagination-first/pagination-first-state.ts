import type { PaginationFirst } from './pagination-first.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbitePaginationFirstStateToken = createStateToken<PaginationFirst>(
  'Flowbite PaginationFirst'
);
export const provideFlowbitePaginationFirstState = createStateProvider(
  FlowbitePaginationFirstStateToken
);
export const injectFlowbitePaginationFirstState = createStateInjector(
  FlowbitePaginationFirstStateToken
);
export const flowbitePaginationFirstState = createState(FlowbitePaginationFirstStateToken);
