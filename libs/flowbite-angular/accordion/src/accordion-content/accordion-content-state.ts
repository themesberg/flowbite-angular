import type { FlowbiteAccordionContentDirective } from './accordion-content.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAccordionContentStateToken =
  createStateToken<FlowbiteAccordionContentDirective>('Flowbite AccordionContent');
export const provideFlowbiteAccordionContentState = createStateProvider(
  FlowbiteAccordionContentStateToken
);
export const injectFlowbiteAccordionContentState = createStateInjector(
  FlowbiteAccordionContentStateToken
);
export const flowbiteAccordionContentState = createState(FlowbiteAccordionContentStateToken);
