import { injectFlowbiteBadgeConfig } from '../config/badge-config';
import { flowbiteBadgeState, provideFlowbiteBadgeState } from './badge-state';

import { mergeDeep } from 'flowbite-angular';

import { booleanAttribute, computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    span[flowbiteBadge]
  `,
  exportAs: 'flowbiteBadge',
  hostDirectives: [],
  providers: [provideFlowbiteBadgeState()],
  host: {
    '[class]': `theme().host.root`,
  },
})
export class FlowbiteBadgeDirective {
  readonly config = injectFlowbiteBadgeConfig();

  /**
   * @see {@link injectFlowbiteBadgeConfig}
   */
  readonly color = input(this.config.color);
  /**
   * @see {@link injectFlowbiteBadgeConfig}
   */
  readonly border = input(this.config.border, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteBadgeConfig}
   */
  readonly pill = input(this.config.pill, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteBadgeConfig}
   */
  readonly size = input(this.config.size);
  /**
   * @see {@link injectFlowbiteBadgeConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.color[this.state.color()],
          mergedTheme.host.border[this.state.border() ? 'on' : 'off'],
          mergedTheme.host.pill[this.state.pill() ? 'on' : 'off'],
          mergedTheme.host.size[this.state.size()],

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
  readonly state = flowbiteBadgeState<FlowbiteBadgeDirective>(this);
}
