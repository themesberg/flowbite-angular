import { injectFlowbiteBaseButtonState } from '../base-button/base-button-state';
import { FlowbiteBaseButtonDirective } from '../base-button/base-button.directive';
import { injectFlowbiteButtonConfig } from '../config/button-config';
import { flowbiteButtonState, provideFlowbiteButtonState } from './button-state';
import type { FlowbiteButtonTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';

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
    button[flowbiteButton],
    a[flowbiteButton]
  `,
  exportAs: 'flowbiteButton',
  hostDirectives: [
    {
      directive: FlowbiteBaseButtonDirective,
      inputs: ['color:color', 'size:size', 'pill:pill', 'outline:outline'],
      outputs: [],
    },
  ],
  imports: [],
  providers: [provideFlowbiteButtonState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteButtonComponent {
  protected readonly config = injectFlowbiteButtonConfig();
  protected readonly baseButtonState = injectFlowbiteBaseButtonState();

  /**
   * @see {@link injectFlowbiteButtonConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteButtonTheme>>(this.config.customTheme);

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

  protected readonly state = flowbiteButtonState<FlowbiteButtonComponent>(this);
}
