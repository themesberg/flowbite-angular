import { injectFlowbiteBreadcrumbState } from '../breadcrumb/breadcrumb-state';
import type { FlowbiteBreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
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
  input,
  ViewEncapsulation,
} from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    li[flowbite-breadcrumb-item]
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
export class FlowbiteBreadcrumbItemComponent {
  protected readonly config = injectFlowbiteBreadcrumbItemConfig();
  protected readonly flowbiteBreadcrumbState =
    injectFlowbiteBreadcrumbState<FlowbiteBreadcrumbComponent>();

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
          mergedTheme.host.color[this.flowbiteBreadcrumbState().color()]
        ),
      },
      icon: {
        root: twMerge(mergedTheme.icon.base),
      },
    };
  });

  protected readonly state = flowbiteBreadcrumbItemState<FlowbiteBreadcrumbItemComponent>(this);
}
