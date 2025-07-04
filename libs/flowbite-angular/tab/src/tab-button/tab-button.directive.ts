import { injectFlowbiteTabButtonConfig } from '../config/tab-button-config';
import { injectFlowbiteTabState } from '../tab/tab-state';
import { flowbiteTabButtonState, provideFlowbiteTabButtonState } from './tab-button-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';
import { BaseButton } from 'flowbite-angular/button';

import { computed, Directive, input } from '@angular/core';
import { NgpFocus } from 'ng-primitives/interactions';
import { NgpTabButton } from 'ng-primitives/tabs';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    li[flowbiteTabButton]
  `,
  exportAs: 'flowbiteTabButton',
  hostDirectives: [
    {
      directive: NgpTabButton,
      inputs: ['id:id', 'ngpTabButtonValue:value', 'ngpTabButtonDisabled:disabled'],
      outputs: [],
    },
    {
      directive: NgpFocus,
      inputs: [],
      outputs: [],
    },
    {
      directive: BaseButton,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteTabButtonState()],
  host: { '[class]': `theme().host.root` },
})
export class TabButton {
  readonly config = injectFlowbiteTabButtonConfig();
  readonly tabState = injectFlowbiteTabState();

  /**
   * @see {@link injectFlowbiteTabButtonConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          colorToTheme(mergedTheme.host.color, this.tabState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteTabButtonState<TabButton>(this);
}
