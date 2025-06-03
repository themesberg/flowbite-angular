import type { FlowbiteHelper } from './helper.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteHelperStateToken = createStateToken<FlowbiteHelper>('Flowbite Helper');
export const provideFlowbiteHelperState = createStateProvider(FlowbiteHelperStateToken);
export const injectFlowbiteHelperState = createStateInjector(FlowbiteHelperStateToken);
export const flowbiteHelperState = createState(FlowbiteHelperStateToken);
