import { injectFlowbiteAccordionConfig } from '../config/accordion-config';
import { flowbiteAccordionState, provideFlowbiteAccordionState } from './accordion-state';
import type { FlowbiteAccordionColors, FlowbiteAccordionTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import type { BooleanInput } from '@angular/cdk/coercion';
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
export class FlowbiteAccordionDirective {
  protected readonly config = injectFlowbiteAccordionConfig();

  /**
   * @see {@link injectFlowbiteAccordionConfig}
   */
  readonly color = input<keyof FlowbiteAccordionColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteAccordionConfig}
   */
  readonly flush = input<boolean, BooleanInput>(this.config.flush, {
    transform: booleanAttribute,
  });
  /**
   * @see {@link injectFlowbiteAccordionConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteAccordionTheme>>(this.config.customTheme);

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
  readonly state = flowbiteAccordionState<FlowbiteAccordionDirective>(this);
}
