import { injectFlowbiteIndicatorConfig } from '../config/indicator-config';
import { flowbiteIndicatorState, provideFlowbiteIndicatorState } from './indicator-state';
import type {
  FlowbiteIndicatorColors,
  FlowbiteIndicatorSizes,
  FlowbiteIndicatorTheme,
} from './theme';

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
    span[flowbiteIndicator]
  `,
  exportAs: 'flowbiteIndicator',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteIndicatorState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteIndicatorComponent {
  protected readonly config = injectFlowbiteIndicatorConfig();

  /**
   * @see {@link injectFlowbiteIndicatorConfig}
   */
  readonly color = input<keyof FlowbiteIndicatorColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteIndicatorConfig}
   */
  readonly size = input<keyof FlowbiteIndicatorSizes>(this.config.size);

  /**
   * @see {@link injectFlowbiteIndicatorConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteIndicatorTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.color[this.state.color()],
          mergedTheme.host.size[this.state.size()]
        ),
      },
    };
  });

  protected readonly state = flowbiteIndicatorState<FlowbiteIndicatorComponent>(this);
}
