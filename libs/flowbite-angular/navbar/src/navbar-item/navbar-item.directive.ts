import { injectFlowbiteNavbarItemConfig } from '../config/navbar-item-config';
import { FlowbiteNavbar } from '../navbar/navbar.component';
import { flowbiteNavbarItemState, provideFlowbiteNavbarItemState } from './navbar-item-state';
import type { FlowbiteNavbarItemTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteBaseButton } from 'flowbite-angular/button';

import { computed, Directive, inject, input } from '@angular/core';
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
      directive: FlowbiteBaseButton,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteNavbarItemState()],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
})
export class FlowbiteNavbarItem {
  protected readonly config = injectFlowbiteNavbarItemConfig();

  /**
   * @see {@link injectFlowbiteNavbarItemConfig}
   */
  readonly navbar = input(inject(FlowbiteNavbar));
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
          mergedTheme.host.color[this.navbar().state.color()]
        ),
      },
    };
  });

  readonly state = flowbiteNavbarItemState<FlowbiteNavbarItem>(this);

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
    this.navbar().toggle();
  }
}
