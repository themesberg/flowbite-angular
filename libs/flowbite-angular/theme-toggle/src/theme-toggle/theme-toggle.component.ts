import { injectFlowbiteThemeToggleConfig } from '../config/theme-toggle-config';
import { FlowbiteTheme } from '../theme/theme.directive';
import type { FlowbiteThemeToggleTheme } from './theme';
import { flowbiteThemeToggleState, provideFlowbiteThemeToggleState } from './theme-toggle-state';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteBaseButton, injectFlowbiteBaseButtonState } from 'flowbite-angular/button';
import { FlowbiteIcon } from 'flowbite-angular/icon';
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
      directive: FlowbiteBaseButton,
      inputs: ['color:color', 'size:size', 'pill:pill', 'outline:outline'],
      outputs: [],
    },
  ],
  imports: [FlowbiteIcon],
  providers: [provideFlowbiteThemeToggleState(), provideIcons({ sun, moon })],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `
    <flowbite-icon
      class="block dark:hidden"
      name="sun"
      [size]="baseButtonState().size()"
      [color]="undefined"
      flowbiteStrokeWidth="lg" />
    <flowbite-icon
      class="hidden dark:inline"
      name="moon"
      [size]="baseButtonState().size()"
      [color]="undefined"
      flowbiteStrokeWidth="lg" />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteThemeToggle {
  protected readonly baseButtonState = injectFlowbiteBaseButtonState();
  protected readonly config = injectFlowbiteThemeToggleConfig();
  protected readonly themeDirective = inject(FlowbiteTheme);

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
          mergedTheme.host.size[this.baseButtonState().size()],
          mergedTheme.host.pill[this.baseButtonState().pill() ? 'on' : 'off'],
          this.baseButtonState().outline()
            ? mergedTheme.host.colorOutline[this.baseButtonState().color()]
            : mergedTheme.host.color[this.baseButtonState().color()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteThemeToggleState<FlowbiteThemeToggle>(this);

  /**
   * @internal
   */
  onClick(): void {
    this.themeDirective.toggleTheme();
  }
}
