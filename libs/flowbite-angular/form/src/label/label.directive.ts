import { injectFlowbiteLabelConfig } from '../config/label-config';
import { flowbiteLabelState, provideFlowbiteLabelState } from './label-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    label[flowbiteLabel]
  `,
  exportAs: 'flowbiteLabel',
  hostDirectives: [],
  providers: [provideFlowbiteLabelState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteLabel {
  readonly config = injectFlowbiteLabelConfig();

  /**
   * @see {@link injectFlowbiteLabelConfig}
   */
  readonly color = input(this.config.color);
  /**
   * @see {@link injectFlowbiteLabelConfig}
   */
  readonly customTheme = input(this.config.customTheme);

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
  readonly state = flowbiteLabelState<FlowbiteLabel>(this);
}
