import { injectFlowbiteLabelConfig } from '../config/label-config';
import { injectFlowbiteFormFieldState } from '../form-field/form-field-state';
import { flowbiteLabelState, provideFlowbiteLabelState } from './label-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpLabel } from 'ng-primitives/form-field';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    label[flowbiteLabel]
  `,
  exportAs: 'flowbiteLabel',
  hostDirectives: [
    {
      directive: NgpLabel,
      inputs: ['id:id'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteLabelState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteLabel {
  readonly config = injectFlowbiteLabelConfig();
  readonly formFieldState = injectFlowbiteFormFieldState();

  /**
   * @see {@link injectFlowbiteLabelConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          colorToTheme(mergedTheme.host.color, this.formFieldState().color()),
          mergedTheme.host.mode[this.formFieldState().mode()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteLabelState<FlowbiteLabel>(this);
}
