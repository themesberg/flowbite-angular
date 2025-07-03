import { injectFlowbiteSidebarToggleConfig } from '../config/sidebar-toggle-config';
import type { Sidebar } from '../sidebar/sidebar.directive';
import {
  flowbiteSidebarToggleState,
  provideFlowbiteSidebarToggleState,
} from './sidebar-toggle-state';
import type { FlowbiteSidebarToggleTheme } from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { BaseButton } from 'flowbite-angular/button';
import { Icon } from 'flowbite-angular/icon';
import { barsFromLeft } from 'flowbite-angular/icon/outline/general';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { twMerge } from 'tailwind-merge';

@Component({
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
  imports: [Icon],
  providers: [provideFlowbiteSidebarToggleState(), provideIcons({ barsFromLeft })],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `<flowbite-icon
    name="barsFromLeft"
    class="size-10 stroke-2" />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarToggle {
  readonly config = injectFlowbiteSidebarToggleConfig();

  /**
   * @see {@link injectFlowbiteSidebarToggleConfig}
   */
  readonly sidebar = input.required<Sidebar>();
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
          colorToTheme(mergedTheme.host.color, this.sidebar().state.color())
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
    this.sidebar().toggle();
  }
}
