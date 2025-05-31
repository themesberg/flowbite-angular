import type { FlowbiteCardComponent } from './card.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteCardStateToken = createStateToken<FlowbiteCardComponent>('Flowbite Card');
export const provideFlowbiteCardState = createStateProvider(FlowbiteCardStateToken);
export const injectFlowbiteCardState = createStateInjector(FlowbiteCardStateToken);
export const flowbiteCardState = createState(FlowbiteCardStateToken);
