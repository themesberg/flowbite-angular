import type { FlowbiteCardHeader } from './card-header.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteCardHeaderStateToken =
  createStateToken<FlowbiteCardHeader>('Flowbite CardHeader');
export const provideFlowbiteCardHeaderState = createStateProvider(FlowbiteCardHeaderStateToken);
export const injectFlowbiteCardHeaderState = createStateInjector(FlowbiteCardHeaderStateToken);
export const flowbiteCardHeaderState = createState(FlowbiteCardHeaderStateToken);
