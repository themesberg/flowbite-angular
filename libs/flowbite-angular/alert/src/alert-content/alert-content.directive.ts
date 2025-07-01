import { injectFlowbiteAlertState } from '../alert/alert-state';
import { injectFlowbiteAlertContentConfig } from '../config/alert-content-config';
import { flowbiteAlertContentState, provideFlowbiteAlertContentState } from './alert-content-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

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
export class FlowbiteAlertContent {
  readonly config = injectFlowbiteAlertContentConfig();
  readonly alertState = injectFlowbiteAlertState();

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
          mergedTheme.host.transition,
          colorToTheme(mergedTheme.host.color, this.alertState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteAlertContentState<FlowbiteAlertContent>(this);
}
