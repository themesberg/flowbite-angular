import { injectFlowbiteBreadcrumbContentConfig } from '../config/breadcrumb-content-config';
import {
  flowbiteBreadcrumbContentState,
  provideFlowbiteBreadcrumbContentState,
} from './breadcrumb-content-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    ol[flowbiteBreadcrumbContent]
  `,
  exportAs: 'flowbiteBreadcrumbContent',
  hostDirectives: [],
  providers: [provideFlowbiteBreadcrumbContentState()],
  host: { '[class]': `theme().host.root` },
})
export class BreadcrumbContent {
  readonly config = injectFlowbiteBreadcrumbContentConfig();

  /**
   * @see {@link injectFlowbiteBreadcrumbContentConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base, mergedTheme.host.transition),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteBreadcrumbContentState<BreadcrumbContent>(this);
}
