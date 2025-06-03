import { injectFlowbiteBreadcrumbConfig } from '../config/breadcrumb-config';
import { flowbiteBreadcrumbState, provideFlowbiteBreadcrumbState } from './breadcrumb-state';
import type { FlowbiteBreadcrumbColors, FlowbiteBreadcrumbTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';

import { booleanAttribute, computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    nav[flowbiteBreadcrumb]
  `,
  exportAs: 'flowbiteBreadcrumb',
  hostDirectives: [],
  providers: [provideFlowbiteBreadcrumbState()],
  host: {
    '[class]': `theme().host.root`,
  },
})
export class FlowbiteBreadcrumb {
  readonly config = injectFlowbiteBreadcrumbConfig();

  /**
   * @see {@link injectFlowbiteBreadcrumbConfig}
   */
  readonly color = input<keyof FlowbiteBreadcrumbColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteBreadcrumbConfig}
   */
  readonly solid = input(this.config.solid, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteBreadcrumbConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteBreadcrumbTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          this.state.solid() &&
            mergedTheme.host.solid[this.state.solid() ? 'on' : 'off'] &&
            mergedTheme.host.color[this.state.color()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteBreadcrumbState<FlowbiteBreadcrumb>(this);
}
