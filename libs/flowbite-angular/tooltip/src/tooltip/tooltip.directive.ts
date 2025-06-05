import { injectFlowbiteTooltipConfig } from '../config/tooltip-config';
import type { FlowbiteTooltipColors, FlowbiteTooltipTheme } from './theme';
import { flowbiteTooltipState, provideFlowbiteTooltipState } from './tooltip-state';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    [flowbiteTooltip]
  `,
  exportAs: 'flowbiteTooltip',
  hostDirectives: [],
  providers: [provideFlowbiteTooltipState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteTooltip {
  protected readonly config = injectFlowbiteTooltipConfig();

  /**
   * @see {@link injectFlowbiteTooltipConfig}
   */
  readonly color = input<keyof FlowbiteTooltipColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteTooltipConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteTooltipTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          colorToTheme(mergedTheme.host.color, this.state.color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteTooltipState<FlowbiteTooltip>(this);
}
