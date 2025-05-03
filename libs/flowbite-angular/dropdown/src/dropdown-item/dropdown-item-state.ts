import type { FlowbiteDropdownItemComponent } from './dropdown-item.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteDropdownItemStateToken =
  createStateToken<FlowbiteDropdownItemComponent>('Flowbite Dropdown Item');
export const provideFlowbiteDropdownItemState = createStateProvider(FlowbiteDropdownItemStateToken);
export const injectFlowbiteDropdownItemState = createStateInjector(FlowbiteDropdownItemStateToken);
export const flowbiteDropdownItemState = createState(FlowbiteDropdownItemStateToken);
