import { injectFlowbiteNavbarItemConfig } from '../config/navbar-item-config';
import { injectFlowbiteNavbarState } from '../navbar/navbar-state';
import { flowbiteNavbarItemState, provideFlowbiteNavbarItemState } from './navbar-item-state';
import type { FlowbiteNavbarItemTheme } from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { BaseButton } from 'flowbite-angular/button';

import { computed, Directive, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    a[flowbiteNavbarItem],
    button[flowbiteNavbarItem]
  `,
  exportAs: 'flowbiteNavbarItem',
  hostDirectives: [
    {
      directive: BaseButton,
      inputs: ['color'],
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
  providers: [provideFlowbiteNavbarItemState()],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
})
export class NavbarItem {
  protected readonly config = injectFlowbiteNavbarItemConfig();
  protected readonly navbarState = injectFlowbiteNavbarState();

  /**
   * @see {@link injectFlowbiteNavbarItemConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteNavbarItemTheme>>(this.config.customTheme);

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

  readonly state = flowbiteNavbarItemState<NavbarItem>(this);

  /**
   * @internal
   */
  onClick(): void {
    this.toggleNavbar();
  }

  /**
   * @internal
   */
  toggleNavbar(): void {
    this.navbarState().toggle();
  }
}
