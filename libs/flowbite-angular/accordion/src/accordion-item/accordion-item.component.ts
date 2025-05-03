import { injectFlowbiteAccordionState } from '../accordion/accordion-state';
import type { FlowbiteAccordionComponent } from '../accordion/accordion.component';
import { injectFlowbiteAccordionItemConfig } from '../config/accordion-item-config';
import {
  flowbiteAccordionItemState,
  provideFlowbiteAccordionItemState,
} from './accordion-item-state';
import type { FlowbiteAccordionItemTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
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
    flowbiteAccordionItem,
    div[flowbiteAccordionItem]
  `,
  exportAs: 'flowbiteAccordionItem',
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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteAccordionItemComponent {
  protected readonly flowbiteAccordionState =
    injectFlowbiteAccordionState<FlowbiteAccordionComponent>();
  private readonly ngpAccordionItemState = injectAccordionItemState();

  readonly config = injectFlowbiteAccordionItemConfig();

  readonly title = input.required<string>();
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
