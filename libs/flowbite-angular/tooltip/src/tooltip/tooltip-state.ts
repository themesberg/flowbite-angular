import type { Tooltip } from './tooltip.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteTooltipStateToken = createStateToken<Tooltip>('Flowbite Tooltip');
export const provideFlowbiteTooltipState = createStateProvider(FlowbiteTooltipStateToken);
export const injectFlowbiteTooltipState = createStateInjector(FlowbiteTooltipStateToken);
export const flowbiteTooltipState = createState(FlowbiteTooltipStateToken);
