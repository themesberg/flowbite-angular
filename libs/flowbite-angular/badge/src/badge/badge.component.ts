import { injectFlowbiteBadgeConfig } from '../config/badge-config';
import { flowbiteBadgeState, provideFlowbiteBadgeState } from './badge-state';

import { mergeDeep } from 'flowbite-angular';

import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    span[flowbiteBadge],
    button[flowbiteBadge],
    a[flowbiteBadge]
  `,
  exportAs: 'flowbiteBadge',
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
  imports: [],
  providers: [provideFlowbiteBadgeState()],
  host: {
    '[class]': `theme().host.root`,
  },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteBadgeComponent {
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
          mergedTheme.host.size[this.state.size()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteBadgeState<FlowbiteBadgeComponent>(this);
}
