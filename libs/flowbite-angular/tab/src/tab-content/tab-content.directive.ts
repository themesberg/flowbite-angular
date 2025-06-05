import { injectFlowbiteTabContentConfig } from '../config/tab-content-config';
import { injectFlowbiteTabState } from '../tab/tab-state';
import { flowbiteTabContentState, provideFlowbiteTabContentState } from './tab-content-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpTabPanel } from 'ng-primitives/tabs';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    [flowbiteTabContent]
  `,
  exportAs: 'flowbiteTabContent',
  hostDirectives: [
    {
      directive: NgpTabPanel,
      inputs: ['id:id', 'ngpTabPanelValue: value'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteTabContentState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteTabContent {
  readonly config = injectFlowbiteTabContentConfig();
  readonly tabState = injectFlowbiteTabState();

  /**
   * @see {@link injectFlowbiteTabContentConfig}
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
  readonly state = flowbiteTabContentState<FlowbiteTabContent>(this);
}
