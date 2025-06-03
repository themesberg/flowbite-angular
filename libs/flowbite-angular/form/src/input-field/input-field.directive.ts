import { injectFlowbiteInputFieldConfig } from '../config/input-field-config';
import { flowbiteInputFieldState, provideFlowbiteInputFieldState } from './input-field-state';
import type { FlowbiteInputFieldColors, FlowbiteInputFieldTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpInput } from 'ng-primitives/input';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    input[flowbiteInputField]
  `,
  exportAs: 'flowbiteInputField',
  hostDirectives: [
    {
      directive: NgpInput,
      inputs: ['disabled'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteInputFieldState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteInputField {
  protected readonly config = injectFlowbiteInputFieldConfig();

  /**
   * @see {@link injectFlowbiteInputFieldConfig}
   */
  readonly color = input<keyof FlowbiteInputFieldColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteInputFieldConfig}
   */
  readonly size = input<keyof FlowbiteInputFieldColors>(this.config.size);
  /**
   * @see {@link injectFlowbiteInputFieldConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteInputFieldTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.disabled,
          mergedTheme.host.size[this.state.size()],
          mergedTheme.host.color[this.state.color()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteInputFieldState<FlowbiteInputField>(this);
}
