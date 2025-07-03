import { injectFlowbiteThemeToggleConfig } from '../config/theme-toggle-config';
import { Theme } from '../theme/theme.directive';
import type { FlowbiteThemeToggleTheme } from './theme';
import { flowbiteThemeToggleState, provideFlowbiteThemeToggleState } from './theme-toggle-state';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { BaseButton, injectFlowbiteBaseButtonState } from 'flowbite-angular/button';
import { Icon } from 'flowbite-angular/icon';
import { moon, sun } from 'flowbite-angular/icon/outline/weather';

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
    button[flowbiteThemeToggle]
  `,
  exportAs: 'flowbiteThemeToggle',
  hostDirectives: [
    {
      directive: BaseButton,
      inputs: ['color:color'],
      outputs: [],
    },
  ],
  imports: [Icon],
  providers: [provideFlowbiteThemeToggleState(), provideIcons({ sun, moon })],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `
    <flowbite-icon
      class="inline size-5 stroke-2 dark:hidden"
      name="sun" />
    <flowbite-icon
      class="hidden size-5 stroke-2 dark:inline"
      name="moon" />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggle {
  protected readonly baseButtonState = injectFlowbiteBaseButtonState();
  protected readonly config = injectFlowbiteThemeToggleConfig();
  protected readonly themeDirective = inject(Theme);

  /**
   * @see {@link injectFlowbiteThemeToggleConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteThemeToggleTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.focus,
          mergedTheme.host.disabled,
          colorToTheme(mergedTheme.host.color, this.baseButtonState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteThemeToggleState<ThemeToggle>(this);

  /**
   * @internal
   */
  onClick(): void {
    this.themeDirective.toggleTheme();
  }
}
