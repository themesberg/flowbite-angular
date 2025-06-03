import { injectFlowbiteDropdownConfig } from '../config/dropdown-config';
import { flowbiteDropdownState, provideFlowbiteDropdownState } from './dropdown-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpMenu } from 'ng-primitives/menu';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    div[flowbiteDropdown]
  `,
  exportAs: 'flowbiteDropdown',
  hostDirectives: [
    {
      directive: NgpMenu,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteDropdownState()],
  host: {
    '[class]': `theme().host.root`,
  },
})
export class FlowbiteDropdown {
  readonly config = injectFlowbiteDropdownConfig();

  /**
   * @see {@link injectFlowbiteDropdownConfig}
   */
  readonly color = input(this.config.color);
  /**
   * @see {@link injectFlowbiteDropdownConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base, mergedTheme.host.color[this.state.color()]),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteDropdownState<FlowbiteDropdown>(this);
}
