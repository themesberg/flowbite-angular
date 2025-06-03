import { injectFlowbiteCardState } from '../card/card-state';
import { injectFlowbiteCardContentConfig } from '../config/card-content-config';
import { flowbiteCardContentState, provideFlowbiteCardContentState } from './card-content-state';
import type { FlowbiteCardContentTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    [flowbiteCardContent]
  `,
  exportAs: 'flowbiteCardContent',
  hostDirectives: [],
  providers: [provideFlowbiteCardContentState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteCardContent {
  readonly config = injectFlowbiteCardContentConfig();
  readonly cardState = injectFlowbiteCardState();

  /**
   * @see {@link injectFlowbiteCardContentConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteCardContentTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.color[this.cardState().color()],
          this.cardState().orientation() === 'horizontal' &&
            mergedTheme.host.size[this.cardState().size()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteCardContentState<FlowbiteCardContent>(this);
}
