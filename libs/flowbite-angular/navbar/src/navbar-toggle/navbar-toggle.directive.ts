import { injectFlowbiteNavbarToggleConfig } from '../config/navbar-toggle-config';
import { injectFlowbiteNavbarState } from '../navbar/navbar-state';
import { flowbiteNavbarToggleState, provideFlowbiteNavbarToggleState } from './navbar-toggle-state';
import type { FlowbiteNavbarToggleTheme } from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { BaseButton } from 'flowbite-angular/button';
import { bars } from 'flowbite-angular/icon/outline/general';

import { computed, Directive, input } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    button[flowbiteNavbarToggle]
  `,
  exportAs: 'flowbiteNavbarToggle',
  hostDirectives: [
    {
      directive: BaseButton,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteNavbarToggleState(), provideIcons({ bars })],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
})
export class NavbarToggle {
  protected readonly config = injectFlowbiteNavbarToggleConfig();
  protected readonly navbarState = injectFlowbiteNavbarState();

  /**
   * @see {@link injectFlowbiteNavbarToggleConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteNavbarToggleTheme>>(this.config.customTheme);

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

  readonly state = flowbiteNavbarToggleState<NavbarToggle>(this);

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
