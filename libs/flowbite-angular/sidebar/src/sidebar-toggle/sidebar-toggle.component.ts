import { injectFlowbiteSidebarToggleConfig } from '../config/sidebar-toggle-config';
import { injectFlowbiteSidebarState } from '../sidebar/sidebar-state';
import type { FlowbiteSidebar } from '../sidebar/sidebar.directive';
import {
  flowbiteSidebarToggleState,
  provideFlowbiteSidebarToggleState,
} from './sidebar-toggle-state';
import type { FlowbiteSidebarToggleTheme } from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteBaseButton } from 'flowbite-angular/button';
import { FlowbiteIcon } from 'flowbite-angular/icon';
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
      directive: FlowbiteBaseButton,
      inputs: [],
      outputs: [],
    },
  ],
  imports: [FlowbiteIcon],
  providers: [provideFlowbiteSidebarToggleState(), provideIcons({ barsFromLeft })],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `<flowbite-icon name="barsFromLeft" />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteSidebarToggle {
  readonly config = injectFlowbiteSidebarToggleConfig();
  readonly sidebarState = injectFlowbiteSidebarState();

  /**
   * @see {@link injectFlowbiteSidebarToggleConfig}
   */
  readonly sidebar = input.required<FlowbiteSidebar>();
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
          colorToTheme(mergedTheme.host.color, this.sidebarState().state.color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteSidebarToggleState<FlowbiteSidebarToggle>(this);

  /**
   * @internal
   */
  onClick(): void {
    this.sidebar().toggle();
  }
}
