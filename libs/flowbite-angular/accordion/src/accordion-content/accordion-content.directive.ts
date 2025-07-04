import { injectFlowbiteAccordionState } from '../accordion/accordion-state';
import { injectFlowbiteAccordionContentConfig } from '../config/accordion-content-config';
import {
  flowbiteAccordionContentState,
  provideFlowbiteAccordionContentState,
} from './accordion-content-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { injectAccordionItemState, NgpAccordionContent } from 'ng-primitives/accordion';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    div[flowbiteAccordionContent]
  `,
  exportAs: 'flowbiteAccordionContent',
  hostDirectives: [
    {
      directive: NgpAccordionContent,
      inputs: ['id'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteAccordionContentState()],
  host: { '[class]': `theme().host.root` },
})
export class AccordionContent {
  readonly config = injectFlowbiteAccordionContentConfig();
  readonly accordionState = injectFlowbiteAccordionState();
  readonly ngpAccordionItemState = injectAccordionItemState();

  /**
   * @see {@link injectFlowbiteAccordionContentConfig}
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
          mergedTheme.host.flush[this.accordionState().flush() ? 'on' : 'off'],
          mergedTheme.host.open[this.ngpAccordionItemState().open() ? 'on' : 'off']
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteAccordionContentState<AccordionContent>(this);
}
