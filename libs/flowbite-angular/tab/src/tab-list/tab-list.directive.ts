import { injectFlowbiteTabListConfig } from '../config/tab-list-config';
import { injectFlowbiteTabState } from '../tab/tab-state';
import { flowbiteTabListState, provideFlowbiteTabListState } from './tab-list-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpTabList } from 'ng-primitives/tabs';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    ul[flowbiteTabList]
  `,
  exportAs: 'flowbiteTabList',
  hostDirectives: [
    {
      directive: NgpTabList,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteTabListState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteTabList {
  readonly config = injectFlowbiteTabListConfig();
  readonly tabState = injectFlowbiteTabState();

  /**
   * @see {@link injectFlowbiteTabListConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          colorToTheme(mergedTheme.host.color, this.tabState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteTabListState<FlowbiteTabList>(this);
}
