import { injectFlowbiteAccordionState } from '../accordion/accordion-state';
import { injectFlowbiteAccordionTitleConfig } from '../config/accordion-title-config';
import {
  flowbiteAccordionTitleState,
  provideFlowbiteAccordionTitleState,
} from './accordion-title-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpAccordionTrigger } from 'ng-primitives/accordion';
import { NgpButton } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    [flowbiteAccordionTitle]
  `,
  exportAs: 'flowbiteAccordionTitle',
  hostDirectives: [
    {
      directive: NgpButton,
      inputs: ['disabled:disabled'],
      outputs: [],
    },
    {
      directive: NgpFocus,
      inputs: [],
      outputs: [],
    },
    {
      directive: NgpAccordionTrigger,
      inputs: ['id'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteAccordionTitleState()],
  host: { '[class]': `theme().host.root` },
})
export class AccordionTitle {
  readonly config = injectFlowbiteAccordionTitleConfig();
  readonly accordionState = injectFlowbiteAccordionState();

  /**
   * @see {@link injectFlowbiteAccordionTitleConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          colorToTheme(mergedTheme.host.color, this.accordionState().color()),
          mergedTheme.host.flush[this.accordionState().flush() ? 'on' : 'off']
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteAccordionTitleState<AccordionTitle>(this);
}
