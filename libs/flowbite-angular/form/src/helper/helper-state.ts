import type { Helper } from './helper.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteHelperStateToken = createStateToken<Helper>('Flowbite Helper');
export const provideFlowbiteHelperState = createStateProvider(FlowbiteHelperStateToken);
export const injectFlowbiteHelperState = createStateInjector(FlowbiteHelperStateToken);
export const flowbiteHelperState = createState(FlowbiteHelperStateToken);
