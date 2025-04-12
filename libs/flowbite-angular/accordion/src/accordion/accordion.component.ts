import { flowbiteAccordionState, provideFlowbiteAccordionState } from './accordion-state';
import { fb_it_accordion } from './i';
import type { FlowbiteAccordionColors, FlowbiteAccordionTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import type { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Component, computed, inject, input } from '@angular/core';
import { NgpAccordion, provideAccordionState } from 'ng-primitives/accordion';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    flowbite-accordion,
    div[flowbite-accordion]
  `,
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
  template: `<ng-content />`,
})
export class FlowbiteAccordionComponent {
  readonly baseTheme = inject(fb_it_accordion);

  /**
   * @default primary
   */
  readonly color = input<keyof FlowbiteAccordionColors>('primary');
  /**
   * @default false
   */
  readonly flush = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });
  /**
   * @default {}
   */
  readonly customTheme = input<DeepPartial<FlowbiteAccordionTheme>>({});

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base),
      },
    };
  });

  protected readonly state = flowbiteAccordionState<FlowbiteAccordionComponent>(this);
}
