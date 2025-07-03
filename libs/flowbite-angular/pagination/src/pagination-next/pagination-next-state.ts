import type { PaginationNext } from './pagination-next.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbitePaginationNextStateToken =
  createStateToken<PaginationNext>('Flowbite PaginationNext');
export const provideFlowbitePaginationNextState = createStateProvider(
  FlowbitePaginationNextStateToken
);
export const injectFlowbitePaginationNextState = createStateInjector(
  FlowbitePaginationNextStateToken
);
export const flowbitePaginationNextState = createState(FlowbitePaginationNextStateToken);
