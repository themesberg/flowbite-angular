import { injectFlowbiteHelperConfig } from '../config/helper-config';
import { flowbiteHelperState, provideFlowbiteHelperState } from './helper-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    [flowbiteHelper]
  `,
  exportAs: 'flowbiteHelper',
  hostDirectives: [],
  providers: [provideFlowbiteHelperState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteHelper {
  readonly config = injectFlowbiteHelperConfig();

  /**
   * @see {@link injectFlowbiteHelperConfig}
   */
  readonly color = input(this.config.color);
  /**
   * @see {@link injectFlowbiteHelperConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base, mergedTheme.host.color[this.state.color()]),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteHelperState<FlowbiteHelper>(this);
}
