import { FlowbiteBreadcrumb } from '../breadcrumb/breadcrumb.component';
import { injectFlowbiteBreadcrumbItemConfig } from '../config/breadcrumb-item-config';
import {
  flowbiteBreadcrumbItemState,
  provideFlowbiteBreadcrumbItemState,
} from './breadcrumb-item-state';
import type { FlowbiteBreadcrumbItemTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';

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
    li[flowbiteBreadcrumbItem]
  `,
  exportAs: 'flowbiteBreadcrumbItem',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteBreadcrumbItemState()],
  host: {
    '[class]': `theme().host.root`,
  },
  template: `
    <svg
      [class]="theme().icon.root"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m10 16 4-4-4-4" />
    </svg>
    <ng-content />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteBreadcrumbItem {
  protected readonly config = injectFlowbiteBreadcrumbItemConfig();

  /**
   * @see {@link injectFlowbiteBreadcrumbItemConfig}
   */
  readonly breadcrumb = input(inject(FlowbiteBreadcrumb));
  /**
   * @see {@link injectFlowbiteBreadcrumbItemConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteBreadcrumbItemTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.color[this.breadcrumb().state.color()]
        ),
      },
      icon: {
        root: twMerge(mergedTheme.icon.base),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteBreadcrumbItemState<FlowbiteBreadcrumbItem>(this);
}
