import type { FlowbiteAccordionTitleDirective } from './accordion-title.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAccordionTitleStateToken =
  createStateToken<FlowbiteAccordionTitleDirective>('Flowbite AccordionTitle');
export const provideFlowbiteAccordionTitleState = createStateProvider(
  FlowbiteAccordionTitleStateToken
);
export const injectFlowbiteAccordionTitleState = createStateInjector(
  FlowbiteAccordionTitleStateToken
);
export const flowbiteAccordionTitleState = createState(FlowbiteAccordionTitleStateToken);
