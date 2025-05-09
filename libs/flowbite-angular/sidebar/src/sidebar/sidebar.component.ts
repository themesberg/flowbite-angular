import { injectFlowbiteSidebarConfig } from '../config/sidebar-config';
import { flowbiteSidebarState, provideFlowbiteSidebarState } from './sidebar-state';
import type { FlowbiteSidebarColors, FlowbiteSidebarTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import type { BooleanInput } from '@angular/cdk/coercion';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    aside[flowbiteSidebar]
  `,
  exportAs: 'flowbiteSidebar',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteSidebarState()],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteSidebarComponent {
  protected readonly config = injectFlowbiteSidebarConfig();

  /**
   * @see {@link injectFlowbiteSidebarConfig}
   */
  readonly open = input<boolean, BooleanInput>(this.config.open, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteSidebarConfig}
   */
  readonly color = input<keyof FlowbiteSidebarColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteSidebarConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteSidebarTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.open[this.state.open() ? 'on' : 'off'],
          mergedTheme.host.color[this.state.color()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteSidebarState<FlowbiteSidebarComponent>(this);

  /**
   * @internal
   */
  onClick(): void {
    this.toggle();
  }

  /**
   * @internal
   */
  toggle(newState?: boolean): void {
    newState ??= !this.state.open();

    this.state.open.set(newState);
  }
}
