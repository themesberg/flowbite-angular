import { injectFlowbiteHelperConfig } from '../config/helper-config';
import { injectFlowbiteFormFieldState } from '../form-field/form-field-state';
import { flowbiteHelperState, provideFlowbiteHelperState } from './helper-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpDescription } from 'ng-primitives/form-field';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    [flowbiteHelper]
  `,
  exportAs: 'flowbiteHelper',
  hostDirectives: [
    {
      directive: NgpDescription,
      inputs: ['id:id'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteHelperState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteHelper {
  readonly config = injectFlowbiteHelperConfig();
  readonly formFieldState = injectFlowbiteFormFieldState();

  /**
   * @see {@link injectFlowbiteHelperConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base, mergedTheme.host.color[this.formFieldState().color()]),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteHelperState<FlowbiteHelper>(this);
}
