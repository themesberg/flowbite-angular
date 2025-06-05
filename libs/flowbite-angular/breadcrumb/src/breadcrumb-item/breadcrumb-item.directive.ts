import { injectFlowbiteBreadcrumbState } from '../breadcrumb/breadcrumb-state';
import { injectFlowbiteBreadcrumbItemConfig } from '../config/breadcrumb-item-config';
import {
  flowbiteBreadcrumbItemState,
  provideFlowbiteBreadcrumbItemState,
} from './breadcrumb-item-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
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
  readonly breadcrumbState = injectFlowbiteBreadcrumbState();

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
          colorToTheme(mergedTheme.host.color, this.breadcrumbState().color()),

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
