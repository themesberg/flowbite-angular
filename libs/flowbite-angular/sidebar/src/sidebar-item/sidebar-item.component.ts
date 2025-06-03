import { injectFlowbiteSidebarItemConfig } from '../config/sidebar-item-config';
import { FlowbiteSidebar } from '../sidebar/sidebar.component';
import { flowbiteSidebarItemState, provideFlowbiteSidebarItemState } from './sidebar-item-state';
import type { FlowbiteSidebarItemTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteBaseButton } from 'flowbite-angular/button';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
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
  imports: [],
  providers: [provideFlowbiteSidebarItemState()],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteSidebarItem {
  protected readonly config = injectFlowbiteSidebarItemConfig();

  /**
   * @see {@link injectFlowbiteSidebarItemConfig}
   */
  readonly sidebar = input(inject(FlowbiteSidebar));
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
          mergedTheme.host.color[this.sidebar().state.color()]
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
    this.sidebar().toggle();
  }
}
