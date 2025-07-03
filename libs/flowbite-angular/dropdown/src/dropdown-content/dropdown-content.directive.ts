import { injectFlowbiteDropdownContentConfig } from '../config/dropdown-content-config';
import { injectFlowbiteDropdownState } from '../dropdown/dropdown-state';
import {
  flowbiteDropdownContentState,
  provideFlowbiteDropdownContentState,
} from './dropdown-content-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    ul[flowbiteDropdownContent]
  `,
  exportAs: 'flowbiteDropdownContent',
  hostDirectives: [],
  providers: [provideFlowbiteDropdownContentState()],
  host: { '[class]': `theme().host.root` },
})
export class DropdownContent {
  readonly config = injectFlowbiteDropdownContentConfig();
  readonly dropdownState = injectFlowbiteDropdownState();

  /**
   * @see {@link injectFlowbiteDropdownContentConfig}
   */
  readonly customTheme = input(this.config.customTheme);

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
  readonly state = flowbiteDropdownContentState<DropdownContent>(this);
}
