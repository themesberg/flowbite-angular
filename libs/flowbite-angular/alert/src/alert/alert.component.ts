import { injectFlowbiteAlertConfig } from '../config/alert-config';
import { flowbiteAlertState, provideFlowbiteAlertState } from './alert-state';
import type { FlowbiteAlertColors, FlowbiteAlertTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import type { BooleanInput } from '@angular/cdk/coercion';
import {
  booleanAttribute,
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
    div[flowbiteAlert]
  `,
  exportAs: 'flowbiteAlert',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteAlertState()],
  host: {
    '[class]': `theme().host.root`,
    '[attr.role]': 'alert',
  },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteAlertComponent {
  protected readonly config = injectFlowbiteAlertConfig();

  /**
   * @see {@link injectFlowbiteAlertConfig}
   */
  readonly color = input<keyof FlowbiteAlertColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteAlertConfig}
   */
  readonly border = input<boolean, BooleanInput>(this.config.border, {
    transform: booleanAttribute,
  });
  /**
   * @see {@link injectFlowbiteAlertConfig}
   */
  readonly accent = input<boolean, BooleanInput>(this.config.accent, {
    transform: booleanAttribute,
  });
  /**
   * @see {@link injectFlowbiteAlertConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteAlertTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.color[this.state.color()],
          mergedTheme.host.border[this.state.border() ? 'on' : 'off'],
          mergedTheme.host.accent[this.state.accent() ? 'on' : 'off']
        ),
      },
    };
  });
  /**
   * @internal
   */
  readonly state = flowbiteAlertState<FlowbiteAlertComponent>(this);
}
