import { injectFlowbiteAccordionState } from '../accordion/accordion-state';
import type { FlowbiteAccordionComponent } from '../accordion/accordion.component';
import {
  flowbiteAccordionItemState,
  provideFlowbiteAccordionItemState,
} from './accordion-item-state';
import { fb_it_accordion_item } from './i';
import type { FlowbiteAccordionItemTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';

import { Component, computed, inject, input } from '@angular/core';
import {
  injectAccordionItemState,
  NgpAccordionContent,
  NgpAccordionItem,
  NgpAccordionTrigger,
  provideAccordionItemState,
} from 'ng-primitives/accordion';
import { NgpButton } from 'ng-primitives/button';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    flowbite-accordion-item,
    div[flowbite-accordion-item]
  `,
  hostDirectives: [
    {
      directive: NgpAccordionItem,
      inputs: ['ngpAccordionItemValue:value', 'ngpAccordionItemDisabled:disabled'],
    },
  ],
  imports: [NgpAccordionTrigger, NgpAccordionContent, NgpButton],
  providers: [provideFlowbiteAccordionItemState(), provideAccordionItemState()],
  host: { '[class]': `theme().host.root` },
  template: `
    <button
      ngpButton
      ngpAccordionTrigger
      [class]="theme().title.root">
      <h2 [class]="theme().title.text">
        {{ state.title() }}
      </h2>
    </button>
    <div
      ngpAccordionContent
      [class]="theme().content.root">
      <ng-content />
    </div>
  `,
})
export class FlowbiteAccordionItemComponent {
  protected readonly flowbiteAccordionState =
    injectFlowbiteAccordionState<FlowbiteAccordionComponent>();
  private readonly ngpAccordionItemState = injectAccordionItemState();

  readonly baseTheme = inject(fb_it_accordion_item);

  readonly title = input.required<string>();
  /**
   * @default {}
   */
  readonly customTheme = input<DeepPartial<FlowbiteAccordionItemTheme>>({});

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base),
      },
      title: {
        root: twMerge(
          mergedTheme.title.base,
          mergedTheme.title.transition,
          mergedTheme.title.color[this.flowbiteAccordionState().color()],
          mergedTheme.title.flush[this.flowbiteAccordionState().flush() ? 'on' : 'off']
        ),
        text: twMerge(mergedTheme.title.text.base),
      },
      content: {
        root: twMerge(
          mergedTheme.content.base,
          mergedTheme.content.transition,
          mergedTheme.content.color[this.flowbiteAccordionState().color()],
          mergedTheme.content.flush[this.flowbiteAccordionState().flush() ? 'on' : 'off'],
          mergedTheme.content.open[this.ngpAccordionItemState().open() ? 'on' : 'off']
        ),
      },
    };
  });

  protected readonly state = flowbiteAccordionItemState<FlowbiteAccordionItemComponent>(this);
}
