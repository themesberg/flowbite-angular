import type { FlowbiteAccordionComponent } from './accordion.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAccordionStateToken = createStateToken<FlowbiteAccordionComponent>;
export const provideFlowbiteAccordionState = createStateProvider(FlowbiteAccordionStateToken);
export const injectFlowbiteAccordionState = createStateInjector(FlowbiteAccordionStateToken);
export const flowbiteAccordionState = createState(FlowbiteAccordionStateToken);
