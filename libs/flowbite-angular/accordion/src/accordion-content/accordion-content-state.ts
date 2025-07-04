import type { AccordionContent } from './accordion-content.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAccordionContentStateToken = createStateToken<AccordionContent>(
  'Flowbite AccordionContent'
);
export const provideFlowbiteAccordionContentState = createStateProvider(
  FlowbiteAccordionContentStateToken
);
export const injectFlowbiteAccordionContentState = createStateInjector(
  FlowbiteAccordionContentStateToken
);
export const flowbiteAccordionContentState = createState(FlowbiteAccordionContentStateToken);
