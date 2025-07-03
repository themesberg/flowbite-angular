import type { Dropdown } from './dropdown.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteDropdownStateToken = createStateToken<Dropdown>('Flowbite Dropdown');
export const provideFlowbiteDropdownState = createStateProvider(FlowbiteDropdownStateToken);
export const injectFlowbiteDropdownState = createStateInjector(FlowbiteDropdownStateToken);
export const flowbiteDropdownState = createState(FlowbiteDropdownStateToken);
