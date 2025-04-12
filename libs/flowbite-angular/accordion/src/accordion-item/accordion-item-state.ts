import type { FlowbiteAccordionItemComponent } from './accordion-item.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteAccordionItemStateToken = createStateToken<FlowbiteAccordionItemComponent>;
export const provideFlowbiteAccordionItemState = createStateProvider(
  FlowbiteAccordionItemStateToken
);
export const injectFlowbiteAccordionItemState = createStateInjector(
  FlowbiteAccordionItemStateToken
);
export const flowbiteAccordionItemState = createState(FlowbiteAccordionItemStateToken);
