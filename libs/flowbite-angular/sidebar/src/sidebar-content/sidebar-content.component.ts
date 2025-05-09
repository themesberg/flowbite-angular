import { injectFlowbiteSidebarContentConfig } from '../config/sidebar-content-config';
import { FlowbiteSidebarComponent } from '../sidebar/sidebar.component';
import {
  flowbiteSidebarContentState,
  provideFlowbiteSidebarContentState,
} from './sidebar-content-state';
import type { FlowbiteSidebarContentTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

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
    div[flowbiteSidebarContent]
  `,
  exportAs: 'flowbiteSidebarContent',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteSidebarContentState()],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick($event)',
  },
  template: `
    <ul [class]="theme().container.root">
      <ng-content />
    </ul>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteSidebarContentComponent {
  protected readonly config = injectFlowbiteSidebarContentConfig();

  /**
   * @see {@link injectFlowbiteSidebarContentConfig}
   */
  readonly sidebar = input(inject(FlowbiteSidebarComponent));
  /**
   * @see {@link injectFlowbiteSidebarContentConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteSidebarContentTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.open[this.sidebar().state.open() ? 'on' : 'off'],
          mergedTheme.host.color[this.sidebar().state.color()]
        ),
      },
      container: {
        root: twMerge(mergedTheme.container.base),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteSidebarContentState<FlowbiteSidebarContentComponent>(this);

  /**
   * @internal
   */
  onClick($event: MouseEvent): void {
    $event.stopPropagation();
  }
}
