import { injectFlowbiteBaseButtonConfig } from '../config/base-button-config';
import { flowbiteBaseButtonState, provideFlowbiteBaseButtonState } from './base-button-state';
import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from './theme';

import { booleanAttribute, Directive, input } from '@angular/core';

@Directive({
  standalone: true,
  providers: [provideFlowbiteBaseButtonState()],
})
export class BaseButton {
  readonly config = injectFlowbiteBaseButtonConfig();

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
  readonly pill = input(this.config.pill, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteBaseButtonConfig}
   */
  readonly outline = input(this.config.outline, { transform: booleanAttribute });

  /**
   * @internal
   */
  readonly state = flowbiteBaseButtonState<BaseButton>(this);
}
