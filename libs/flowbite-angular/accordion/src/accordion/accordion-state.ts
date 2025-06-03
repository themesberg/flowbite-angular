import type { FlowbiteAccordion } from './accordion.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAccordionStateToken =
  createStateToken<FlowbiteAccordion>('Flowbite Accordion');
export const provideFlowbiteAccordionState = createStateProvider(FlowbiteAccordionStateToken);
export const injectFlowbiteAccordionState = createStateInjector(FlowbiteAccordionStateToken);
export const flowbiteAccordionState = createState(FlowbiteAccordionStateToken);
