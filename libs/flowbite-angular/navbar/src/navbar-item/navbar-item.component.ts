import { injectFlowbiteNavbarItemConfig } from '../config/navbar-item-config';
import { FlowbiteNavbarComponent } from '../navbar/navbar.component';
import { flowbiteNavbarItemState, provideFlowbiteNavbarItemState } from './navbar-item-state';
import type { FlowbiteNavbarItemTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteBaseButtonDirective } from 'flowbite-angular/button';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
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
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteNavbarItemComponent {
  protected readonly config = injectFlowbiteNavbarItemConfig();

  /**
   * @see {@link injectFlowbiteNavbarItemConfig}
   */
  readonly navbar = input(inject(FlowbiteNavbarComponent));
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
          mergedTheme.host.color[this.navbar().state.color()]
        ),
      },
    };
  });

  readonly state = flowbiteNavbarItemState<FlowbiteNavbarItemComponent>(this);

  /**
   * @internal
   */
  onClick(): void {
    this.toggleNavbar();
  }

  /**
   * @internal
   */
  toggleNavbar(): void {
    this.navbar().toggle();
  }
}
