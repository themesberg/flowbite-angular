import type { FlowbiteDropdownContent } from './dropdown-content.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteDropdownContentStateToken = createStateToken<FlowbiteDropdownContent>(
  'Flowbite DropdownContent'
);
export const provideFlowbiteDropdownContentState = createStateProvider(
  FlowbiteDropdownContentStateToken
);
export const injectFlowbiteDropdownContentState = createStateInjector(
  FlowbiteDropdownContentStateToken
);
export const flowbiteDropdownContentState = createState(FlowbiteDropdownContentStateToken);
