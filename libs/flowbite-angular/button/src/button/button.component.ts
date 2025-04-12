import { flowbiteButtonState, provideFlowbiteButtonState } from './button-state';
import { fb_it_button } from './i';
import type { FlowbiteButtonColors, FlowbiteButtonSizes, FlowbiteButtonTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';

import type { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Component, computed, inject, input } from '@angular/core';
import { NgpButton, provideButtonState } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    button[flowbite-button],
    a[flowbite-button]
  `,
  hostDirectives: [{ directive: NgpButton, inputs: ['disabled'] }, NgpFocus],
  imports: [],
  providers: [provideFlowbiteButtonState(), provideButtonState()],
  host: { '[class]': `theme().host.root` },
  template: ` <ng-content />`,
})
export class FlowbiteButtonComponent {
  readonly baseTheme = inject(fb_it_button);

  /**
   * @default primary
   */
  readonly color = input<keyof FlowbiteButtonColors>('primary');
  /**
   * @default md
   */
  readonly size = input<keyof FlowbiteButtonSizes>('md');
  /**
   * @default false
   */
  readonly pill = input<boolean, BooleanInput>(false, { transform: booleanAttribute });
  /**
   * @default false
   */
  readonly outline = input<boolean, BooleanInput>(false, { transform: booleanAttribute });
  /**
   * @default {}
   */
  readonly customTheme = input<DeepPartial<FlowbiteButtonTheme>>({});

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.focus,
          mergedTheme.host.disabled,
          mergedTheme.host.size[this.state.size()],
          mergedTheme.host.pill[this.state.pill() ? 'on' : 'off'],
          this.state.outline()
            ? mergedTheme.host.colorOutline[this.state.color()]
            : mergedTheme.host.color[this.state.color()]
        ),
      },
    };
  });

  protected readonly state = flowbiteButtonState<FlowbiteButtonComponent>(this);
}
