import { injectFlowbiteDropdownItemConfig } from '../config/dropdown-item-config';
import { flowbiteDropdownItemState, provideFlowbiteDropdownItemState } from './dropdown-item-state';
import type { FlowbiteDropdownItemTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { NgpMenuItem } from 'ng-primitives/menu';
import { twMerge } from 'tailwind-merge';

@Component({
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
  ],
  imports: [],
  providers: [provideFlowbiteDropdownItemState()],
  host: {
    '[class]': `theme().host.root`,
  },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteDropdownItem {
  protected readonly config = injectFlowbiteDropdownItemConfig();

  /**
   * @see {@link injectFlowbiteDropdownItemConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteDropdownItemTheme>>(this.config.customTheme);

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
  readonly state = flowbiteDropdownItemState<FlowbiteDropdownItem>(this);
}
