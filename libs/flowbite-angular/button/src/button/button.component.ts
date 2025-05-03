import { injectFlowbiteButtonConfig } from '../config/button-config';
import { flowbiteButtonState, provideFlowbiteButtonState } from './button-state';
import type { FlowbiteButtonColors, FlowbiteButtonSizes, FlowbiteButtonTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';

import type { BooleanInput } from '@angular/cdk/coercion';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { NgpButton, provideButtonState } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    button[flowbiteButton],
    a[flowbiteButton]
  `,
  exportAs: 'flowbiteButton',
  hostDirectives: [{ directive: NgpButton, inputs: ['disabled'] }, NgpFocus],
  imports: [],
  providers: [provideFlowbiteButtonState(), provideButtonState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteButtonComponent {
  protected readonly config = injectFlowbiteButtonConfig();

  /**
   * @see {@link injectFlowbiteButtonConfig}
   */
  readonly color = input<keyof FlowbiteButtonColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteButtonConfig}
   */
  readonly size = input<keyof FlowbiteButtonSizes>(this.config.size);
  /**
   * @see {@link injectFlowbiteButtonConfig}
   */
  readonly pill = input<boolean, BooleanInput>(this.config.pill, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteButtonConfig}
   */
  readonly outline = input<boolean, BooleanInput>(this.config.outline, {
    transform: booleanAttribute,
  });
  /**
   * @see {@link injectFlowbiteButtonConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteButtonTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.focus,
          mergedTheme.host.disabled,
          mergedTheme.host.size[this.state.size()],
          mergedTheme.host.pill[this.state.pill() ? 'on' : 'off'],
          this.state.outline()
            ? mergedTheme.host.colorOutline[this.state.color()]
            : mergedTheme.host.color[this.state.color()]
        ),
      },
    };
  });

  protected readonly state = flowbiteButtonState<FlowbiteButtonComponent>(this);
}
