import { FlowbiteBreadcrumb } from '../breadcrumb/breadcrumb.directive';
import { injectFlowbiteBreadcrumbItemConfig } from '../config/breadcrumb-item-config';
import {
  flowbiteBreadcrumbItemState,
  provideFlowbiteBreadcrumbItemState,
} from './breadcrumb-item-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, inject, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    li[flowbiteBreadcrumbItem]
  `,
  exportAs: 'flowbiteBreadcrumbItem',
  hostDirectives: [
    {
      directive: NgpButton,
      inputs: ['disabled:disabled'],
      outputs: [],
    },
    {
      directive: NgpFocus,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteBreadcrumbItemState()],
  host: {
    '[class]': `theme().host.root`,
  },
})
export class FlowbiteBreadcrumbItem {
  readonly config = injectFlowbiteBreadcrumbItemConfig();

  /**
   * @see {@link injectFlowbiteBreadcrumbItemConfig}
   */
  readonly breadcrumb = input(inject(FlowbiteBreadcrumb));
  /**
   * @see {@link injectFlowbiteBreadcrumbItemConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.color[this.breadcrumb().state.color()],

          /* children */
          mergedTheme.host.children.base,
          mergedTheme.host.children.icon.base
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteBreadcrumbItemState<FlowbiteBreadcrumbItem>(this);
}
