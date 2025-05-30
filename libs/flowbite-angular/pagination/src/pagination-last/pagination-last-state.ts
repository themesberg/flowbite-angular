import type { FlowbitePaginationLastComponent } from './pagination-last.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbitePaginationLastStateToken =
  createStateToken<FlowbitePaginationLastComponent>('Flowbite PaginationLast');
export const provideFlowbitePaginationLastState = createStateProvider(
  FlowbitePaginationLastStateToken
);
export const injectFlowbitePaginationLastState = createStateInjector(
  FlowbitePaginationLastStateToken
);
export const flowbitePaginationLastState = createState(FlowbitePaginationLastStateToken);
