import { injectFlowbiteTabConfig } from '../config/tab-config';
import { flowbiteTabState, provideFlowbiteTabState } from './tab-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpTabset } from 'ng-primitives/tabs';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    [flowbiteTab]
  `,
  exportAs: 'flowbiteTab',
  hostDirectives: [
    {
      directive: NgpTabset,
      inputs: ['id:id', 'ngpTabsetValue:value', 'ngpTabsetActivateOnFocus:activateOnFocus'],
      outputs: ['ngpTabsetValueChange:valueChange'],
    },
  ],
  providers: [provideFlowbiteTabState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteTab {
  readonly config = injectFlowbiteTabConfig();

  /**
   * @see {@link injectFlowbiteTabConfig}
   */
  readonly size = input(this.config.size);
  /**
   * @see {@link injectFlowbiteTabConfig}
   */
  readonly color = input(this.config.color);
  /**
   * @see {@link injectFlowbiteTabConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.size[this.state.size()],
          mergedTheme.host.color[this.state.color()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteTabState<FlowbiteTab>(this);
}
