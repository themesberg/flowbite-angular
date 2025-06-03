import type { FlowbiteDropdown } from './dropdown.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteDropdownStateToken = createStateToken<FlowbiteDropdown>('Flowbite Dropdown');
export const provideFlowbiteDropdownState = createStateProvider(FlowbiteDropdownStateToken);
export const injectFlowbiteDropdownState = createStateInjector(FlowbiteDropdownStateToken);
export const flowbiteDropdownState = createState(FlowbiteDropdownStateToken);
