import { injectFlowbiteDropdownItemConfig } from '../config/dropdown-item-config';
import { injectFlowbiteDropdownState } from '../dropdown/dropdown-state';
import { flowbiteDropdownItemState, provideFlowbiteDropdownItemState } from './dropdown-item-state';
import type { FlowbiteDropdownItemTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpFocus } from 'ng-primitives/interactions';
import { NgpMenuItem } from 'ng-primitives/menu';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    li[flowbiteDropdownItem]
  `,
  exportAs: 'flowbiteDropdownItem',
  hostDirectives: [
    {
      directive: NgpMenuItem,
      inputs: [],
      outputs: [],
    },
    {
      directive: NgpFocus,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteDropdownItemState()],
  host: {
    '[class]': `theme().host.root`,
  },
})
export class FlowbiteDropdownItem {
  readonly config = injectFlowbiteDropdownItemConfig();
  readonly dropdownState = injectFlowbiteDropdownState();

  /**
   * @see {@link injectFlowbiteDropdownItemConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteDropdownItemTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          colorToTheme(mergedTheme.host.color, this.dropdownState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteDropdownItemState<FlowbiteDropdownItem>(this);
}
