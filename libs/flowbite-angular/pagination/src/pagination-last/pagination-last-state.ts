import type { FlowbitePaginationLast } from './pagination-last.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbitePaginationLastStateToken =
  createStateToken<FlowbitePaginationLast>('Flowbite PaginationLast');
export const provideFlowbitePaginationLastState = createStateProvider(
  FlowbitePaginationLastStateToken
);
export const injectFlowbitePaginationLastState = createStateInjector(
  FlowbitePaginationLastStateToken
);
export const flowbitePaginationLastState = createState(FlowbitePaginationLastStateToken);
