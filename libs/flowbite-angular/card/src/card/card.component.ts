import { injectFlowbiteCardConfig } from '../config/card-config';
import { flowbiteCardState, provideFlowbiteCardState } from './card-state';
import type { FlowbiteCardColors, FlowbiteCardTheme } from './theme';

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
    [flowbiteCard]
  `,
  exportAs: 'flowbiteCard',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteCardState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteCard {
  protected readonly config = injectFlowbiteCardConfig();

  /**
   * @see {@link injectFlowbiteCardConfig}
   */
  readonly color = input<keyof FlowbiteCardColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteCardConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteCardTheme>>(this.config.customTheme);

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
  readonly state = flowbiteCardState<FlowbiteCard>(this);
}
