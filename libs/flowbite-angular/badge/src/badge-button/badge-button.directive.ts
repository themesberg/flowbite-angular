import { injectFlowbiteBadgeState } from '../badge/badge-state';
import { injectFlowbiteBadgeButtonConfig } from '../config/badge-button-config';
import { flowbiteBadgeButtonState, provideFlowbiteBadgeButtonState } from './badge-button-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    button[flowbiteBadgeButton],
    a[flowbiteBadgeButton]
  `,
  exportAs: 'flowbiteBadgeButton',
  hostDirectives: [
    {
      directive: NgpButton,
      inputs: ['disabled:disabled'],
      outputs: [],
    },
    {
      directive: NgpFocus,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteBadgeButtonState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteBadgeButton {
  readonly config = injectFlowbiteBadgeButtonConfig();
  readonly badgeState = injectFlowbiteBadgeState();

  /**
   * @see {@link injectFlowbiteBadgeButtonConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base, mergedTheme.host.color[this.badgeState().color()]),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteBadgeButtonState<FlowbiteBadgeButton>(this);
}
