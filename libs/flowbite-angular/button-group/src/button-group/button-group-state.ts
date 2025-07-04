import type { ButtonGroup } from './button-group.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteButtonGroupStateToken = createStateToken<ButtonGroup>('Flowbite ButtonGroup');
export const provideFlowbiteButtonGroupState = createStateProvider(FlowbiteButtonGroupStateToken);
export const injectFlowbiteButtonGroupState = createStateInjector(FlowbiteButtonGroupStateToken);
export const flowbiteButtonGroupState = createState(FlowbiteButtonGroupStateToken);
