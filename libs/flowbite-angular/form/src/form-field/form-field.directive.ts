import { injectFlowbiteFormFieldConfig } from '../config/form-field-config';
import { flowbiteFormFieldState, provideFlowbiteFormFieldState } from './form-field-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpFormField } from 'ng-primitives/form-field';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    div[flowbiteFormField]
  `,
  exportAs: 'flowbiteFormField',
  hostDirectives: [
    {
      directive: NgpFormField,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteFormFieldState()],
  host: { '[class]': `theme().host.root` },
})
export class FormField {
  readonly config = injectFlowbiteFormFieldConfig();

  /**
   * @see {@link injectFlowbiteFormFieldConfig}
   */
  readonly size = input(this.config.size);
  /**
   * @see {@link injectFlowbiteFormFieldConfig}
   */
  readonly color = input(this.config.color);
  /**
   * @see {@link injectFlowbiteFormFieldConfig}
   */
  readonly mode = input(this.config.mode);
  /**
   * @see {@link injectFlowbiteFormFieldConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.mode[this.state.mode()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteFormFieldState<FormField>(this);
}
