import { injectFlowbiteBadgeConfig } from '../config/badge.config';
import { flowbiteBadgeState, provideFlowbiteBadgeState } from './badge.state';
import type { FlowbiteBadgeColors, FlowbiteBadgeSizes, FlowbiteBadgeTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import type { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Component, computed, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    span[flowbite-badge]
  `,
  exportAs: 'flowbiteBadge',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteBadgeState()],
  host: {
    '[class]': `theme().host.root`,
  },
  template: `<ng-content />`,
})
export class FlowbiteBadgeComponent {
  protected readonly config = injectFlowbiteBadgeConfig();

  /**
   * @see {@link injectFlowbiteBadgeConfig}
   */
  readonly color = input<keyof FlowbiteBadgeColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteBadgeConfig}
   */
  readonly border = input<boolean, BooleanInput>(this.config.border, {
    transform: booleanAttribute,
  });
  /**
   * @see {@link injectFlowbiteBadgeConfig}
   */
  readonly pill = input<boolean, BooleanInput>(this.config.pill, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteBadgeConfig}
   */
  readonly size = input<keyof FlowbiteBadgeSizes>(this.config.size);
  /**
   * @see {@link injectFlowbiteBadgeConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteBadgeTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.color[this.state.color()],
          mergedTheme.host.border[this.state.border() ? 'on' : 'off'],
          mergedTheme.host.pill[this.state.pill() ? 'on' : 'off'],
          mergedTheme.host.size[this.state.size()]
        ),
      },
    };
  });

  protected readonly state = flowbiteBadgeState<FlowbiteBadgeComponent>(this);
}
