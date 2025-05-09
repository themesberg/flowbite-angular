import { injectFlowbiteSidebarToggleConfig } from '../config/sidebar-toggle-config';
import type { FlowbiteSidebarComponent } from '../sidebar/sidebar.component';
import {
  flowbiteSidebarToggleState,
  provideFlowbiteSidebarToggleState,
} from './sidebar-toggle-state';
import type { FlowbiteSidebarToggleTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteBaseButtonDirective } from 'flowbite-angular/button';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
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
      directive: FlowbiteBaseButtonDirective,
      inputs: [],
      outputs: [],
    },
  ],
  imports: [FlowbiteIconComponent],
  providers: [provideFlowbiteSidebarToggleState(), provideIcons({ barsFromLeft })],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `<flowbite-icon name="barsFromLeft" />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteSidebarToggleComponent {
  protected readonly config = injectFlowbiteSidebarToggleConfig();

  /**
   * @see {@link injectFlowbiteSidebarToggleConfig}
   */
  readonly sidebar = input.required<FlowbiteSidebarComponent>();
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
          mergedTheme.host.color[this.sidebar().state.color()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteSidebarToggleState<FlowbiteSidebarToggleComponent>(this);

  /**
   * @internal
   */
  onClick(): void {
    this.sidebar().toggle();
  }
}
