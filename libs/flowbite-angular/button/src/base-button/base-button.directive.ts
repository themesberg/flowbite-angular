import { injectFlowbiteBaseButtonConfig } from '../config/base-button-config';
import { flowbiteBaseButtonState, provideFlowbiteBaseButtonState } from './base-button-state';
import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from './theme';

import type { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Directive, input } from '@angular/core';
import { NgpButton, provideButtonState } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';

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

  protected readonly state = flowbiteBaseButtonState<FlowbiteBaseButtonDirective>(this);
}
