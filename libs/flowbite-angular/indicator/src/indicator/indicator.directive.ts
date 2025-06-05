import { injectFlowbiteIndicatorConfig } from '../config/indicator-config';
import { flowbiteIndicatorState, provideFlowbiteIndicatorState } from './indicator-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { booleanAttribute, computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    span[flowbiteIndicator]
  `,
  exportAs: 'flowbiteIndicator',
  hostDirectives: [],
  providers: [provideFlowbiteIndicatorState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteIndicator {
  readonly config = injectFlowbiteIndicatorConfig();

  /**
   * @see {@link injectFlowbiteIndicatorConfig}
   */
  readonly color = input(this.config.color);
  /**
   * @see {@link injectFlowbiteIndicatorConfig}
   */
  readonly size = input(this.config.size);
  /**
   * @see {@link injectFlowbiteIndicatorConfig}
   */
  readonly border = input(this.config.border, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteIndicatorConfig}
   */
  readonly position = input(this.config.position);
  /**
   * @see {@link injectFlowbiteIndicatorConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          colorToTheme(mergedTheme.host.color, this.state.color()),
          mergedTheme.host.size[this.state.size()],
          mergedTheme.host.border[this.state.border() ? 'on' : 'off'],
          this.state.position() && mergedTheme.host.position[this.state.position()!]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteIndicatorState<FlowbiteIndicator>(this);
}
