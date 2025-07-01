import { injectFlowbiteAlertConfig } from '../config/alert-config';
import { flowbiteAlertState, provideFlowbiteAlertState } from './alert-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { booleanAttribute, computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    div[flowbiteAlert]
  `,
  exportAs: 'flowbiteAlert',
  hostDirectives: [],
  providers: [provideFlowbiteAlertState()],
  host: {
    '[class]': `theme().host.root`,
  },
})
export class FlowbiteAlert {
  readonly config = injectFlowbiteAlertConfig();

  /**
   * @see {@link injectFlowbiteAlertConfig}
   */
  readonly color = input(this.config.color);
  /**
   * @see {@link injectFlowbiteAlertConfig}
   */
  readonly border = input(this.config.border, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteAlertConfig}
   */
  readonly accent = input(this.config.accent, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteAlertConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          colorToTheme(mergedTheme.host.color, this.state.color()),
          mergedTheme.host.border[this.state.border() ? 'on' : 'off'],
          mergedTheme.host.accent[this.state.accent() ? 'on' : 'off']
        ),
      },
    };
  });
  /**
   * @internal
   */
  readonly state = flowbiteAlertState<FlowbiteAlert>(this);
}
