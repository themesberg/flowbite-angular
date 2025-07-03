import { injectFlowbiteAlertState } from '../alert/alert-state';
import { injectFlowbiteAlertButtonConfig } from '../config/alert-button-config';
import { flowbiteAlertButtonState, provideFlowbiteAlertButtonState } from './alert-button-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    button[flowbiteAlertButton],
    a[flowbiteAlertButton]
  `,
  exportAs: 'flowbiteAlertButton',
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
  providers: [provideFlowbiteAlertButtonState()],
  host: { '[class]': `theme().host.root` },
})
export class AlertButton {
  readonly config = injectFlowbiteAlertButtonConfig();
  readonly alertState = injectFlowbiteAlertState();

  /**
   * @see {@link injectFlowbiteAlertButtonConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          colorToTheme(mergedTheme.host.color, this.alertState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteAlertButtonState<AlertButton>(this);
}
