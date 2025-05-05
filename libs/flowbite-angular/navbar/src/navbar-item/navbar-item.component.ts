import { injectFlowbiteNavbarItemConfig } from '../config/navbar-item-config';
import { injectFlowbiteNavbarState } from '../navbar/navbar-state';
import { flowbiteNavbarItemState, provideFlowbiteNavbarItemState } from './navbar-item-state';
import type { FlowbiteNavbarItemTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteBaseButtonDirective } from 'flowbite-angular/button';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    a[flowbiteNavbarItem],
    button[flowbiteNavbarItem]
  `,
  exportAs: 'flowbiteNavbarItem',
  hostDirectives: [
    {
      directive: FlowbiteBaseButtonDirective,
      inputs: [],
      outputs: [],
    },
  ],
  imports: [],
  providers: [provideFlowbiteNavbarItemState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteNavbarItemComponent {
  protected readonly config = injectFlowbiteNavbarItemConfig();
  protected readonly flowbiteNavbarState = injectFlowbiteNavbarState();

  /**
   * @see {@link injectFlowbiteNavbarItemConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteNavbarItemTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.focus,
          mergedTheme.host.disabled,
          mergedTheme.host.color[this.flowbiteNavbarState().color()]
        ),
      },
    };
  });

  protected readonly state = flowbiteNavbarItemState<FlowbiteNavbarItemComponent>(this);
}
