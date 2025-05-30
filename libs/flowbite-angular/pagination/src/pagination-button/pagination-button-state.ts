import type { FlowbitePaginationButtonComponent } from './pagination-button.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbitePaginationButtonStateToken =
  createStateToken<FlowbitePaginationButtonComponent>('Flowbite PaginationButton');
export const provideFlowbitePaginationButtonState = createStateProvider(
  FlowbitePaginationButtonStateToken
);
export const injectFlowbitePaginationButtonState = createStateInjector(
  FlowbitePaginationButtonStateToken
);
export const flowbitePaginationButtonState = createState(FlowbitePaginationButtonStateToken);
