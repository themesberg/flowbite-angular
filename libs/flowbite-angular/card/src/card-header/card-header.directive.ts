import { injectFlowbiteCardState } from '../card/card-state';
import { injectFlowbiteCardHeaderConfig } from '../config/card-header-config';
import { flowbiteCardHeaderState, provideFlowbiteCardHeaderState } from './card-header-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    [flowbiteCardHeader]
  `,
  exportAs: 'flowbiteCardHeader',
  hostDirectives: [],
  providers: [provideFlowbiteCardHeaderState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteCardHeader {
  readonly config = injectFlowbiteCardHeaderConfig();
  readonly cardState = injectFlowbiteCardState();

  /**
   * @see {@link injectFlowbiteCardHeaderConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          colorToTheme(mergedTheme.host.color, this.cardState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteCardHeaderState<FlowbiteCardHeader>(this);
}
