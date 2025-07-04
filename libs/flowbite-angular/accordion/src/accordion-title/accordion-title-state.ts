import type { AccordionTitle } from './accordion-title.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAccordionTitleStateToken =
  createStateToken<AccordionTitle>('Flowbite AccordionTitle');
export const provideFlowbiteAccordionTitleState = createStateProvider(
  FlowbiteAccordionTitleStateToken
);
export const injectFlowbiteAccordionTitleState = createStateInjector(
  FlowbiteAccordionTitleStateToken
);
export const flowbiteAccordionTitleState = createState(FlowbiteAccordionTitleStateToken);
