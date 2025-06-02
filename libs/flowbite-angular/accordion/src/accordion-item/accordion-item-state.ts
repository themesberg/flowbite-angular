import type { FlowbiteAccordionItemDirective } from './accordion-item.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAccordionItemStateToken =
  createStateToken<FlowbiteAccordionItemDirective>('Flowbite Accordion Item');
export const provideFlowbiteAccordionItemState = createStateProvider(
  FlowbiteAccordionItemStateToken
);
export const injectFlowbiteAccordionItemState = createStateInjector(
  FlowbiteAccordionItemStateToken
);
export const flowbiteAccordionItemState = createState(FlowbiteAccordionItemStateToken);
