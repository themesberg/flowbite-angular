import { injectFlowbiteNavbarIconItemConfig } from '../config/navbar-icon-item-config';
import { injectFlowbiteNavbarState } from '../navbar/navbar-state';
import {
  flowbiteNavbarIconItemState,
  provideFlowbiteNavbarIconItemState,
} from './navbar-icon-item-state';
import type { FlowbiteNavbarIconItemTheme } from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { BaseButton, injectFlowbiteBaseButtonState } from 'flowbite-angular/button';

import { computed, Directive, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    button[flowbiteNavbarIconItem],
    a[flowbiteNavbarIconItem],
  `,
  exportAs: 'flowbiteNavbarIconItem',
  hostDirectives: [
    {
      directive: BaseButton,
      inputs: ['color:color'],
      outputs: [],
    },
    {
      directive: NgpButton,
      inputs: ['disabled:disabled'],
      outputs: [],
    },
    {
      directive: NgpFocus,
      inputs: ['ngpFocusDisabled:focusDisabled'],
      outputs: ['ngpFocus'],
    },
  ],
  providers: [provideFlowbiteNavbarIconItemState()],
  host: { '[class]': `theme().host.root` },
})
export class NavbarIconItem {
  protected readonly baseButtonState = injectFlowbiteBaseButtonState();
  protected readonly navbarState = injectFlowbiteNavbarState();
  protected readonly config = injectFlowbiteNavbarIconItemConfig();

  /**
   * @see {@link injectFlowbiteNavbarIconItemConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteNavbarIconItemTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.focus,
          mergedTheme.host.disabled,
          colorToTheme(mergedTheme.host.color, this.navbarState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteNavbarIconItemState<NavbarIconItem>(this);
}
