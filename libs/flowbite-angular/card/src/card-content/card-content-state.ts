import type { CardContent } from './card-content.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteCardContentStateToken = createStateToken<CardContent>('Flowbite CardContent');
export const provideFlowbiteCardContentState = createStateProvider(FlowbiteCardContentStateToken);
export const injectFlowbiteCardContentState = createStateInjector(FlowbiteCardContentStateToken);
export const flowbiteCardContentState = createState(FlowbiteCardContentStateToken);
