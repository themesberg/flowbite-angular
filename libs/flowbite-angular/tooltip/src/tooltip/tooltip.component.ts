import { injectFlowbiteTooltipConfig } from '../config/tooltip-config';
import type { FlowbiteTooltipColors, FlowbiteTooltipTheme } from './theme';
import { flowbiteTooltipState, provideFlowbiteTooltipState } from './tooltip-state';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    [flowbiteTooltip]
  `,
  exportAs: 'flowbiteTooltip',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteTooltipState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteTooltipComponent {
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
        root: twMerge(mergedTheme.host.base, mergedTheme.host.color[this.state.color()]),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteTooltipState<FlowbiteTooltipComponent>(this);
}
