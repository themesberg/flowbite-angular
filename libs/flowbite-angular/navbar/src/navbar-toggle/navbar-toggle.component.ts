import { injectFlowbiteNavbarToggleConfig } from '../config/navbar-toggle-config';
import { FlowbiteNavbarComponent } from '../navbar/navbar.component';
import { flowbiteNavbarToggleState, provideFlowbiteNavbarToggleState } from './navbar-toggle-state';
import type { FlowbiteNavbarToggleTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteBaseButtonDirective } from 'flowbite-angular/button';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
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
      directive: FlowbiteBaseButtonDirective,
      inputs: [],
      outputs: [],
    },
  ],
  imports: [FlowbiteIconComponent],
  providers: [provideFlowbiteNavbarToggleState(), provideIcons({ bars })],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `<flowbite-icon name="bars" />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteNavbarToggleComponent {
  protected readonly config = injectFlowbiteNavbarToggleConfig();

  /**
   * @see {@link injectFlowbiteNavbarToggleConfig}
   */
  readonly navbar = input(inject(FlowbiteNavbarComponent));
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
          mergedTheme.host.color[this.navbar().state.color()]
        ),
      },
    };
  });

  readonly state = flowbiteNavbarToggleState<FlowbiteNavbarToggleComponent>(this);

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
