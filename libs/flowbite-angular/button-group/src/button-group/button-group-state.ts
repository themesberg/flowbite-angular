import type { FlowbiteButtonGroupComponent } from './button-group.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteButtonGroupStateToken =
  createStateToken<FlowbiteButtonGroupComponent>('Flowbite ButtonGroup');
export const provideFlowbiteButtonGroupState = createStateProvider(FlowbiteButtonGroupStateToken);
export const injectFlowbiteButtonGroupState = createStateInjector(FlowbiteButtonGroupStateToken);
export const flowbiteButtonGroupState = createState(FlowbiteButtonGroupStateToken);
