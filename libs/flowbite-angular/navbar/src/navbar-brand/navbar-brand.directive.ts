import { injectFlowbiteNavbarBrandConfig } from '../config/navbar-brand-config';
import { flowbiteNavbarBrandState, provideFlowbiteNavbarBrandState } from './navbar-brand-state';
import type { FlowbiteNavbarBrandTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    a[flowbiteNavbarBrand]
  `,
  exportAs: 'flowbiteNavbarBrand',
  hostDirectives: [],
  providers: [provideFlowbiteNavbarBrandState()],
  host: {
    '[class]': `theme().host.root`,
    type: 'button',
  },
})
export class NavbarBrand {
  protected readonly config = injectFlowbiteNavbarBrandConfig();

  /**
   * @see {@link injectFlowbiteNavbarBrandConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteNavbarBrandTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base, mergedTheme.host.transition),
      },
    };
  });

  protected readonly state = flowbiteNavbarBrandState<NavbarBrand>(this);
}
