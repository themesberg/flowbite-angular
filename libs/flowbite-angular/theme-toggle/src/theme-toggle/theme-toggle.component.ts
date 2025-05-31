import { injectFlowbiteThemeToggleConfig } from '../config/theme-toggle-config';
import { FlowbiteThemeDirective } from '../theme/theme.directive';
import type { FlowbiteThemeToggleTheme } from './theme';
import { flowbiteThemeToggleState, provideFlowbiteThemeToggleState } from './theme-toggle-state';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import {
  FlowbiteBaseButtonDirective,
  injectFlowbiteBaseButtonState,
} from 'flowbite-angular/button';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
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

@Component({
  standalone: true,
  selector: `
    button[flowbiteThemeToggle]
  `,
  exportAs: 'flowbiteThemeToggle',
  hostDirectives: [
    {
      directive: FlowbiteBaseButtonDirective,
      inputs: ['color:color', 'size:size', 'pill:pill', 'outline:outline'],
      outputs: [],
    },
  ],
  imports: [FlowbiteIconComponent],
  providers: [provideFlowbiteThemeToggleState(), provideIcons({ sun, moon })],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `
    <flowbite-icon
      class="block dark:hidden"
      name="sun"
      [flowbiteSize]="baseButtonState().size()"
      [flowbiteColor]="undefined"
      flowbiteStrokeWidth="lg" />
    <flowbite-icon
      class="hidden dark:inline"
      name="moon"
      [flowbiteSize]="baseButtonState().size()"
      [flowbiteColor]="undefined"
      flowbiteStrokeWidth="lg" />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteThemeToggleComponent {
  protected readonly baseButtonState = injectFlowbiteBaseButtonState();
  protected readonly config = injectFlowbiteThemeToggleConfig();
  protected readonly themeDirective = inject(FlowbiteThemeDirective);

  /**
   * @see {@link injectFlowbiteThemeToggleConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteThemeToggleTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      ...FlowbiteBaseButtonDirective.computeTheme(mergedTheme, this.baseButtonState()),
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteThemeToggleState<FlowbiteThemeToggleComponent>(this);

  /**
   * @internal
   */
  onClick(): void {
    this.themeDirective.toggleTheme();
  }
}
