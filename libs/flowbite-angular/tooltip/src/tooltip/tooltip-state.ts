import type { FlowbiteTooltipComponent } from './tooltip.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTooltipStateToken =
  createStateToken<FlowbiteTooltipComponent>('Flowbite Tooltip');
export const provideFlowbiteTooltipState = createStateProvider(FlowbiteTooltipStateToken);
export const injectFlowbiteTooltipState = createStateInjector(FlowbiteTooltipStateToken);
export const flowbiteTooltipState = createState(FlowbiteTooltipStateToken);
