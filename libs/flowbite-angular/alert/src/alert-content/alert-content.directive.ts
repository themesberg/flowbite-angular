import { injectFlowbiteAlertContentConfig } from '../config/alert-content-config';
import { flowbiteAlertContentState, provideFlowbiteAlertContentState } from './alert-content-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    div[flowbiteAlertContent]
  `,
  exportAs: 'flowbiteAlertContent',
  hostDirectives: [],
  providers: [provideFlowbiteAlertContentState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteAlertContentDirective {
  readonly config = injectFlowbiteAlertContentConfig();

  /**
   * @see {@link injectFlowbiteAlertContentConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,

          /* children */
          mergedTheme.host.children.base,
          mergedTheme.host.children.icon.base
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteAlertContentState<FlowbiteAlertContentDirective>(this);
}
