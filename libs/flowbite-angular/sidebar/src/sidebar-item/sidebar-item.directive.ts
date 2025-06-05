import { injectFlowbiteSidebarItemConfig } from '../config/sidebar-item-config';
import { injectFlowbiteSidebarState } from '../sidebar/sidebar-state';
import { FlowbiteSidebar } from '../sidebar/sidebar.directive';
import { flowbiteSidebarItemState, provideFlowbiteSidebarItemState } from './sidebar-item-state';
import type { FlowbiteSidebarItemTheme } from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteBaseButton } from 'flowbite-angular/button';

import { computed, Directive, inject, input } from '@angular/core';
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
      directive: FlowbiteBaseButton,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteSidebarItemState()],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
})
export class FlowbiteSidebarItem {
  readonly config = injectFlowbiteSidebarItemConfig();
  readonly sidebarState = injectFlowbiteSidebarState();

  readonly sidebar = inject(FlowbiteSidebar);
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
  readonly state = flowbiteSidebarItemState<FlowbiteSidebarItem>(this);

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
    this.sidebar.toggle();
  }
}
