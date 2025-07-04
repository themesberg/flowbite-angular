import { injectFlowbiteSidebarItemConfig } from '../config/sidebar-item-config';
import { injectFlowbiteSidebarState } from '../sidebar/sidebar-state';
import { flowbiteSidebarItemState, provideFlowbiteSidebarItemState } from './sidebar-item-state';
import type { FlowbiteSidebarItemTheme } from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { BaseButton } from 'flowbite-angular/button';

import { computed, Directive, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    a[flowbiteSidebarItem],
    button[flowbiteSidebarItem]
  `,
  exportAs: 'flowbiteSidebarItem',
  hostDirectives: [
    {
      directive: BaseButton,
      inputs: [],
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
  providers: [provideFlowbiteSidebarItemState()],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
})
export class SidebarItem {
  readonly config = injectFlowbiteSidebarItemConfig();
  readonly sidebarState = injectFlowbiteSidebarState();

  /**
   * @see {@link injectFlowbiteSidebarItemConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteSidebarItemTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.focus,
          mergedTheme.host.disabled,
          colorToTheme(mergedTheme.host.color, this.sidebarState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteSidebarItemState<SidebarItem>(this);

  /**
   * @internal
   */
  onClick(): void {
    this.toggleSidebar();
  }

  /**
   * @internal
   */
  toggleSidebar(): void {
    this.sidebarState().toggle();
  }
}
