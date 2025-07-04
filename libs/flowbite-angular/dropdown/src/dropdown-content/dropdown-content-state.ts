import type { DropdownContent } from './dropdown-content.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteDropdownContentStateToken = createStateToken<DropdownContent>(
  'Flowbite DropdownContent'
);
export const provideFlowbiteDropdownContentState = createStateProvider(
  FlowbiteDropdownContentStateToken
);
export const injectFlowbiteDropdownContentState = createStateInjector(
  FlowbiteDropdownContentStateToken
);
export const flowbiteDropdownContentState = createState(FlowbiteDropdownContentStateToken);
