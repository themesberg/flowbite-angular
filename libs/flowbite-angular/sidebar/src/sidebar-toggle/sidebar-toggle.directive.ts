import { injectFlowbiteSidebarToggleConfig } from '../config/sidebar-toggle-config';
import { injectFlowbiteSidebarState } from '../sidebar/sidebar-state';
import {
  flowbiteSidebarToggleState,
  provideFlowbiteSidebarToggleState,
} from './sidebar-toggle-state';
import type { FlowbiteSidebarToggleTheme } from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { BaseButton } from 'flowbite-angular/button';
import { barsFromLeft } from 'flowbite-angular/icon/outline/general';

import { computed, Directive, input } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    button[flowbiteSidebarToggle]
  `,
  exportAs: 'flowbiteSidebarToggle',
  hostDirectives: [
    {
      directive: BaseButton,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteSidebarToggleState(), provideIcons({ barsFromLeft })],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
})
export class SidebarToggle {
  protected readonly config = injectFlowbiteSidebarToggleConfig();
  protected readonly sidebarState = injectFlowbiteSidebarState();

  /**
   * @see {@link injectFlowbiteSidebarToggleConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteSidebarToggleTheme>>(this.config.customTheme);

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
  readonly state = flowbiteSidebarToggleState<SidebarToggle>(this);

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
