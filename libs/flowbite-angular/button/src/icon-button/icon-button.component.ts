import { injectFlowbiteBaseButtonState } from '../base-button/base-button-state';
import { FlowbiteBaseButtonDirective } from '../base-button/base-button.directive';
import { injectFlowbiteIconButtonConfig } from '../config/icon-button-config';
import { flowbiteIconButtonState, provideFlowbiteIconButtonState } from './icon-button-state';
import type { FlowbiteIconButtonTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import type { FlowbiteIconStrokeWidths, FlowbiteIconTheme } from 'flowbite-angular/icon';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import type { IconType } from '@ng-icons/core';

@Component({
  standalone: true,
  selector: `
    button[flowbiteIconButton],
    a[flowbiteIconButton],
  `,
  exportAs: 'flowbiteIconButton',
  hostDirectives: [
    {
      directive: FlowbiteBaseButtonDirective,
      inputs: ['color:color', 'size:size', 'pill:pill', 'outline:outline'],
      outputs: [],
    },
  ],
  imports: [FlowbiteIconComponent],
  providers: [provideFlowbiteIconButtonState()],
  host: {
    '[class]': `theme().host.root`,
  },
  template: `
    <flowbite-icon
      [name]="iconName()"
      [svg]="iconSvg()"
      [flowbiteSize]="baseButtonState().size()"
      [flowbiteColor]="undefined"
      [flowbiteStrokeWidth]="iconStrokeWidth()"
      [flowbiteCustomTheme]="iconCustomTheme()" />
    <ng-content />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteIconButtonComponent {
  protected readonly config = injectFlowbiteIconButtonConfig();

  readonly baseButtonState = injectFlowbiteBaseButtonState();
  /**
   * @see {@link injectFlowbiteIconButtonConfig}
   */
  readonly iconName = input<IconType>(this.config.iconName);
  /**
   * @see {@link injectFlowbiteIconButtonConfig}
   */
  readonly iconSvg = input<string | undefined>(this.config.iconSvg);
  /**
   * @see {@link injectFlowbiteIconButtonConfig}
   */
  readonly iconStrokeWidth = input<keyof FlowbiteIconStrokeWidths>(this.config.iconStrokeWidth);
  /**
   * @see {@link injectFlowbiteIconButtonConfig}
   */
  readonly iconCustomTheme = input<DeepPartial<FlowbiteIconTheme>>(this.config.iconCustomTheme);
  /**
   * @see {@link injectFlowbiteIconButtonConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteIconButtonTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      ...FlowbiteBaseButtonDirective.computeTheme(mergedTheme, this.baseButtonState()),
    };
  });

  protected readonly state = flowbiteIconButtonState<FlowbiteIconButtonComponent>(this);
}
