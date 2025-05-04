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
      ...FlowbiteBaseButtonDirective.computeTheme(mergedTheme, this.baseButtonState()),
    };
  });

  protected readonly state = flowbiteButtonState<FlowbiteButtonComponent>(this);
}
