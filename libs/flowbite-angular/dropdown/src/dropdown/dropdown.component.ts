import { injectFlowbiteDropdownConfig } from '../config/dropdown-config';
import { flowbiteDropdownState, provideFlowbiteDropdownState } from './dropdown-state';
import type { FlowbiteDropdownTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { NgpMenu } from 'ng-primitives/menu';
import { twMerge } from 'tailwind-merge';

@Component({
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
  imports: [],
  providers: [provideFlowbiteDropdownState()],
  host: {
    '[class]': `theme().host.root`,
  },
  template: `
    <ul [class]="theme().list.root">
      <ng-content />
    </ul>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteDropdownComponent {
  protected readonly config = injectFlowbiteDropdownConfig();

  /**
   * @see {@link injectFlowbiteDropdownConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteDropdownTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base),
      },
      list: {
        root: twMerge(mergedTheme.list.base),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteDropdownState<FlowbiteDropdownComponent>(this);
}
