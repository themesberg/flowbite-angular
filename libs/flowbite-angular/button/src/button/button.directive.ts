import { injectFlowbiteBaseButtonState } from '../base-button/base-button-state';
import { FlowbiteBaseButton } from '../base-button/base-button.directive';
import { injectFlowbiteButtonConfig } from '../config/button-config';
import { flowbiteButtonState, provideFlowbiteButtonState } from './button-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    button[flowbiteButton],
    a[flowbiteButton]
  `,
  exportAs: 'flowbiteButton',
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
    {
      directive: FlowbiteBaseButton,
      inputs: ['color', 'size', 'pill', 'outline'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteButtonState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteButton {
  readonly config = injectFlowbiteButtonConfig();
  readonly baseButtonState = injectFlowbiteBaseButtonState();

  /**
   * @see {@link injectFlowbiteButtonConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  /**
   * @internal
   */
  readonly state = flowbiteButtonState<FlowbiteButton>(this);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.focus,
          mergedTheme.host.disabled,
          mergedTheme.host.size[this.baseButtonState().size()],
          mergedTheme.host.pill[this.baseButtonState().pill() ? 'on' : 'off'],
          this.baseButtonState().outline()
            ? mergedTheme.host.colorOutline[this.baseButtonState().color()]
            : mergedTheme.host.color[this.baseButtonState().color()],

          /* Children */
          mergedTheme.host.children.base,
          mergedTheme.host.children.icon.base,
          mergedTheme.host.children.icon.size[this.baseButtonState().size()]
        ),
      },
    };
  });
}
