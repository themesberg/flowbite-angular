import { injectFlowbiteBreadcrumbConfig } from '../config/breadcrumb-config';
import { flowbiteBreadcrumbState, provideFlowbiteBreadcrumbState } from './breadcrumb-state';
import type { FlowbiteBreadcrumbColors, FlowbiteBreadcrumbTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';

import {
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
    nav[flowbiteBreadcrumb]
  `,
  exportAs: 'flowbiteBreadcrumb',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteBreadcrumbState()],
  host: {
    '[class]': `theme().host.root`,
    '[aria-label]': 'Breadcrumb',
  },
  template: `
    <ol [class]="theme().list.root">
      <ng-content />
    </ol>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteBreadcrumbComponent {
  protected readonly config = injectFlowbiteBreadcrumbConfig();

  /**
   * @see {@link injectFlowbiteBreadcrumbConfig}
   */
  readonly color = input<keyof FlowbiteBreadcrumbColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteBreadcrumbConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteBreadcrumbTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base),
      },
      list: {
        root: twMerge(mergedTheme.list.base),
      },
    };
  });

  protected readonly state = flowbiteBreadcrumbState<FlowbiteBreadcrumbComponent>(this);
}
