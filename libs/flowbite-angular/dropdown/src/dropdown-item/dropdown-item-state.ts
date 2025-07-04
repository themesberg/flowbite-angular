import type { DropdownItem } from './dropdown-item.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteDropdownItemStateToken =
  createStateToken<DropdownItem>('Flowbite Dropdown Item');
export const provideFlowbiteDropdownItemState = createStateProvider(FlowbiteDropdownItemStateToken);
export const injectFlowbiteDropdownItemState = createStateInjector(FlowbiteDropdownItemStateToken);
export const flowbiteDropdownItemState = createState(FlowbiteDropdownItemStateToken);
