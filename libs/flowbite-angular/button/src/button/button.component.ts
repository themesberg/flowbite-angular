import { flowbiteButtonState, provideFlowbiteButtonState } from './button-state';
import { fb_it_button } from './i';
import type { FlowbiteButtonColors, FlowbiteButtonSizes, FlowbiteButtonTheme } from './theme';
import { flowbiteButtonTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';

import type { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Component, computed, inject, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    button[flowbite-button],
    a[flowbite-button]
  `,
  hostDirectives: [{ directive: NgpButton, inputs: ['disabled'] }],
  providers: [provideFlowbiteButtonState()],
  host: { '[class]': `theme().host` },
  template: ` <ng-content />`,
})
export class FlowbiteButtonComponent {
  readonly ngpButton = inject(NgpButton, { self: true });
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
  readonly isPill = input<boolean, BooleanInput>(false, { transform: booleanAttribute });
  /**
   * @default false
   */
  readonly isOutline = input<boolean, BooleanInput>(false, { transform: booleanAttribute });
  /**
   * @default {}
   */
  readonly customTheme = input<DeepPartial<FlowbiteButtonTheme>>({});

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(flowbiteButtonTheme, this.state.customTheme());

    return {
      host: twMerge(
        mergedTheme.host.base,
        mergedTheme.host.focus,
        mergedTheme.host.disabled,
        mergedTheme.host.size[this.state.size()],
        mergedTheme.host.isPill[this.state.isPill() ? 'on' : 'off'],
        this.state.isOutline()
          ? mergedTheme.host.colorOutline[this.state.color()]
          : mergedTheme.host.color[this.state.color()]
      ),
    };
  });

  protected readonly state = flowbiteButtonState<FlowbiteButtonComponent>(this);
}
