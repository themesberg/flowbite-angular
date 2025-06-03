import { injectFlowbiteAccordionConfig } from '../config/accordion-config';
import { flowbiteAccordionState, provideFlowbiteAccordionState } from './accordion-state';

import { mergeDeep } from 'flowbite-angular';

import { booleanAttribute, computed, Directive, input } from '@angular/core';
import { NgpAccordion, provideAccordionState } from 'ng-primitives/accordion';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    div[flowbiteAccordion]
  `,
  exportAs: 'flowbiteAccordion',
  hostDirectives: [
    {
      directive: NgpAccordion,
      inputs: [
        'ngpAccordionType:type',
        'ngpAccordionDisabled:disabled',
        'ngpAccordionCollapsible:collapsible',
      ],
    },
  ],
  providers: [provideFlowbiteAccordionState(), provideAccordionState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteAccordion {
  readonly config = injectFlowbiteAccordionConfig();

  /**
   * @see {@link injectFlowbiteAccordionConfig}
   */
  readonly color = input(this.config.color);
  /**
   * @see {@link injectFlowbiteAccordionConfig}
   */
  readonly flush = input(this.config.flush, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteAccordionConfig}
   */
  readonly customTheme = input(this.config.customTheme);

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
  readonly state = flowbiteAccordionState<FlowbiteAccordion>(this);
}
