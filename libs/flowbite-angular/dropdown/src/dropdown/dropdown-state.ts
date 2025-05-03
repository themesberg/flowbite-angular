import type { FlowbiteDropdownComponent } from './dropdown.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteDropdownStateToken =
  createStateToken<FlowbiteDropdownComponent>('Flowbite Dropdown');
export const provideFlowbiteDropdownState = createStateProvider(FlowbiteDropdownStateToken);
export const injectFlowbiteDropdownState = createStateInjector(FlowbiteDropdownStateToken);
export const flowbiteDropdownState = createState(FlowbiteDropdownStateToken);
