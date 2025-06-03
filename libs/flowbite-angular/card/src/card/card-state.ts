import type { FlowbiteCard } from './card.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteCardStateToken = createStateToken<FlowbiteCard>('Flowbite Card');
export const provideFlowbiteCardState = createStateProvider(FlowbiteCardStateToken);
export const injectFlowbiteCardState = createStateInjector(FlowbiteCardStateToken);
export const flowbiteCardState = createState(FlowbiteCardStateToken);
