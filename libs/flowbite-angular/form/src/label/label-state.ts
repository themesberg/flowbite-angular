import type { FlowbiteLabel } from './label.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteLabelStateToken = createStateToken<FlowbiteLabel>('Flowbite Label');
export const provideFlowbiteLabelState = createStateProvider(FlowbiteLabelStateToken);
export const injectFlowbiteLabelState = createStateInjector(FlowbiteLabelStateToken);
export const flowbiteLabelState = createState(FlowbiteLabelStateToken);
