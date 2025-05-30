import { injectFlowbiteButtonGroupConfig } from '../config/button-group-config';
import { flowbiteButtonGroupState, provideFlowbiteButtonGroupState } from './button-group-state';
import type { FlowbiteButtonGroupTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

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
    div[flowbiteButtonGroup]
  `,
  exportAs: 'flowbiteButtonGroup',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteButtonGroupState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteButtonGroupComponent {
  protected readonly config = injectFlowbiteButtonGroupConfig();

  /**
   * @see {@link injectFlowbiteButtonGroupConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteButtonGroupTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteButtonGroupState<FlowbiteButtonGroupComponent>(this);
}
