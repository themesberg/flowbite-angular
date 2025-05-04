import { injectFlowbiteBaseButtonConfig } from '../config/base-button-config';
import { flowbiteBaseButtonState, provideFlowbiteBaseButtonState } from './base-button-state';
import type {
  FlowbiteBaseButtonColors,
  FlowbiteBaseButtonSizes,
  FlowbiteBaseButtonTheme,
} from './theme';

import type { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Directive, input } from '@angular/core';
import { NgpButton, provideButtonState } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import type { CreatedState } from 'ng-primitives/state';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
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
  providers: [provideFlowbiteBaseButtonState(), provideButtonState()],
  host: {},
})
export class FlowbiteBaseButtonDirective {
  protected readonly config = injectFlowbiteBaseButtonConfig();

  /**
   * @see {@link injectFlowbiteBaseButtonConfig}
   */
  readonly color = input<keyof FlowbiteBaseButtonColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteBaseButtonConfig}
   */
  readonly size = input<keyof FlowbiteBaseButtonSizes>(this.config.size);
  /**
   * @see {@link injectFlowbiteBaseButtonConfig}
   */
  readonly pill = input<boolean, BooleanInput>(this.config.pill, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteBaseButtonConfig}
   */
  readonly outline = input<boolean, BooleanInput>(this.config.outline, {
    transform: booleanAttribute,
  });

  static computeTheme(
    mergedTheme: FlowbiteBaseButtonTheme,
    state: CreatedState<FlowbiteBaseButtonDirective>
  ) {
    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.focus,
          mergedTheme.host.disabled,
          mergedTheme.host.size[state.size()],
          mergedTheme.host.pill[state.pill() ? 'on' : 'off'],
          state.outline()
            ? mergedTheme.host.colorOutline[state.color()]
            : mergedTheme.host.color[state.color()]
        ),
      },
    };
  }

  protected readonly state = flowbiteBaseButtonState<FlowbiteBaseButtonDirective>(this);
}
