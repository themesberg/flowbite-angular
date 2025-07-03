import { injectFlowbiteCardConfig } from '../config/card-config';
import { flowbiteCardState, provideFlowbiteCardState } from './card-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    [flowbiteCard]
  `,
  exportAs: 'flowbiteCard',
  hostDirectives: [],
  providers: [provideFlowbiteCardState()],
  host: { '[class]': `theme().host.root` },
})
export class Card {
  readonly config = injectFlowbiteCardConfig();

  /**
   * @see {@link injectFlowbiteCardConfig}
   */
  readonly color = input(this.config.color);
  /**
   * @see {@link injectFlowbiteCardConfig}
   */
  readonly size = input(this.config.size);
  /**
   * @see {@link injectFlowbiteCardConfig}
   */
  readonly orientation = input(this.config.orientation);
  /**
   * @see {@link injectFlowbiteCardConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          colorToTheme(mergedTheme.host.color, this.state.color()),
          mergedTheme.host.orientation[this.state.orientation()],
          this.state.orientation() === 'vertical' && mergedTheme.host.size[this.state.size()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteCardState<Card>(this);
}
