import { injectFlowbiteFormControlConfig } from '../config/form-control-config';
import { injectFlowbiteFormFieldState } from '../form-field/form-field-state';
import { flowbiteFormControlState, provideFlowbiteFormControlState } from './form-control-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpInput } from 'ng-primitives/input';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    [flowbiteFormControl]
  `,
  exportAs: 'flowbiteFormControl',
  hostDirectives: [
    {
      directive: NgpInput,
      inputs: ['id:id', 'disabled:disabled'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteFormControlState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteFormControl {
  readonly config = injectFlowbiteFormControlConfig();
  readonly formFieldState = injectFlowbiteFormFieldState();

  /**
   * @see {@link injectFlowbiteFormControlConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.disabled,
          colorToTheme(mergedTheme.host.color, this.formFieldState().color()),
          mergedTheme.host.mode[this.formFieldState().mode()],
          mergedTheme.host.size[this.formFieldState().size()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteFormControlState<FlowbiteFormControl>(this);
}
