import { injectFlowbiteBadgeState } from '../badge/badge-state';
import { FlowbiteBadge } from '../badge/badge.directive';
import { injectFlowbiteBadgeLinkConfig } from '../config/badge-link-config';
import { flowbiteBadgeLinkState, provideFlowbiteBadgeLinkState } from './badge-link-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    button[flowbiteBadgeLink],
    a[flowbiteBadgeLink]
  `,
  exportAs: 'flowbiteBadgeLink',
  hostDirectives: [
    {
      directive: FlowbiteBadge,
      inputs: ['color', 'border', 'pill', 'size', 'customTheme:badgeCustomTheme'],
      outputs: [],
    },
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
  providers: [provideFlowbiteBadgeLinkState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteBadgeLink {
  readonly config = injectFlowbiteBadgeLinkConfig();
  readonly badgeState = injectFlowbiteBadgeState();

  /**
   * @see {@link injectFlowbiteBadgeLinkConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          colorToTheme(mergedTheme.host.color, this.badgeState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteBadgeLinkState<FlowbiteBadgeLink>(this);
}
