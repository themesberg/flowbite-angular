import { injectFlowbiteCardHeaderConfig } from '../config/card-header-config';
import { flowbiteCardHeaderState, provideFlowbiteCardHeaderState } from './card-header-state';
import type { FlowbiteCardHeaderColors, FlowbiteCardHeaderTheme } from './theme';

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
    [flowbiteCardHeader]
  `,
  exportAs: 'flowbiteCardHeader',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteCardHeaderState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteCardHeader {
  protected readonly config = injectFlowbiteCardHeaderConfig();

  /**
   * @see {@link injectFlowbiteCardHeaderConfig}
   */
  readonly color = input<keyof FlowbiteCardHeaderColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteCardHeaderConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteCardHeaderTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base, mergedTheme.host.color[this.state.color()]),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteCardHeaderState<FlowbiteCardHeader>(this);
}
