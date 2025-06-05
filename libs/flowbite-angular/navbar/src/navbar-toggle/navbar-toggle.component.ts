import { injectFlowbiteNavbarToggleConfig } from '../config/navbar-toggle-config';
import { FlowbiteNavbar } from '../navbar/navbar.component';
import { flowbiteNavbarToggleState, provideFlowbiteNavbarToggleState } from './navbar-toggle-state';
import type { FlowbiteNavbarToggleTheme } from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteBaseButton } from 'flowbite-angular/button';
import { FlowbiteIcon } from 'flowbite-angular/icon';
import { bars } from 'flowbite-angular/icon/outline/general';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    button[flowbiteNavbarToggle]
  `,
  exportAs: 'flowbiteNavbarToggle',
  hostDirectives: [
    {
      directive: FlowbiteBaseButton,
      inputs: [],
      outputs: [],
    },
  ],
  imports: [FlowbiteIcon],
  providers: [provideFlowbiteNavbarToggleState(), provideIcons({ bars })],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `<flowbite-icon name="bars" />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteNavbarToggle {
  protected readonly config = injectFlowbiteNavbarToggleConfig();

  /**
   * @see {@link injectFlowbiteNavbarToggleConfig}
   */
  readonly navbar = input(inject(FlowbiteNavbar));
  /**
   * @see {@link injectFlowbiteNavbarToggleConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteNavbarToggleTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.focus,
          mergedTheme.host.disabled,
          colorToTheme(mergedTheme.host.color, this.navbar().state.color())
        ),
      },
    };
  });

  readonly state = flowbiteNavbarToggleState<FlowbiteNavbarToggle>(this);

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
