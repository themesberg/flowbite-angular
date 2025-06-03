import type { FlowbitePaginationButton } from './pagination-button.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbitePaginationButtonStateToken = createStateToken<FlowbitePaginationButton>(
  'Flowbite PaginationButton'
);
export const provideFlowbitePaginationButtonState = createStateProvider(
  FlowbitePaginationButtonStateToken
);
export const injectFlowbitePaginationButtonState = createStateInjector(
  FlowbitePaginationButtonStateToken
);
export const flowbitePaginationButtonState = createState(FlowbitePaginationButtonStateToken);
