import { injectFlowbiteButtonGroupConfig } from '../config/button-group-config';
import { flowbiteButtonGroupState, provideFlowbiteButtonGroupState } from './button-group-state';

import { mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    div[flowbiteButtonGroup]
  `,
  exportAs: 'flowbiteButtonGroup',
  hostDirectives: [],
  providers: [provideFlowbiteButtonGroupState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteButtonGroup {
  protected readonly config = injectFlowbiteButtonGroupConfig();

  /**
   * @see {@link injectFlowbiteButtonGroupConfig}
   */
  readonly customTheme = input(this.config.customTheme);

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
  readonly state = flowbiteButtonGroupState<FlowbiteButtonGroup>(this);
}
