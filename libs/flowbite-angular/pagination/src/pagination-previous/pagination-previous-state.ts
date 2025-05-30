import type { FlowbitePaginationPreviousComponent } from './pagination-previous.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbitePaginationPreviousStateToken =
  createStateToken<FlowbitePaginationPreviousComponent>('Flowbite PaginationPrevious');
export const provideFlowbitePaginationPreviousState = createStateProvider(
  FlowbitePaginationPreviousStateToken
);
export const injectFlowbitePaginationPreviousState = createStateInjector(
  FlowbitePaginationPreviousStateToken
);
export const flowbitePaginationPreviousState = createState(FlowbitePaginationPreviousStateToken);
