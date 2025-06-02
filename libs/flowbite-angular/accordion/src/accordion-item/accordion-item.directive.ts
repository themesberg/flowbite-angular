import { injectFlowbiteAccordionState } from '../accordion/accordion-state';
import { injectFlowbiteAccordionItemConfig } from '../config/accordion-item-config';
import {
  flowbiteAccordionItemState,
  provideFlowbiteAccordionItemState,
} from './accordion-item-state';
import type { FlowbiteAccordionItemTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import {
  injectAccordionItemState,
  NgpAccordionItem,
  provideAccordionItemState,
} from 'ng-primitives/accordion';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    div[flowbiteAccordionItem]
  `,
  exportAs: 'flowbiteAccordionItem',
  hostDirectives: [
    {
      directive: NgpAccordionItem,
      inputs: ['ngpAccordionItemValue:value', 'ngpAccordionItemDisabled:disabled'],
    },
  ],
  providers: [provideFlowbiteAccordionItemState(), provideAccordionItemState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteAccordionItemDirective {
  readonly config = injectFlowbiteAccordionItemConfig();
  readonly accordionState = injectFlowbiteAccordionState();
  readonly ngpAccordionItemState = injectAccordionItemState();

  /**
   * @see {@link injectFlowbiteAccordionItemConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteAccordionItemTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteAccordionItemState<FlowbiteAccordionItemDirective>(this);
}
