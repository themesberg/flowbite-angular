import { injectFlowbiteModalContentConfig } from '../config/modal-content-config';
import { flowbiteModalContentState, provideFlowbiteModalContentState } from './modal-content-state';
import type { FlowbiteModalContentTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpDialogDescription } from 'ng-primitives/dialog';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    [flowbiteModalContent]
  `,
  exportAs: 'flowbiteModalContent',
  hostDirectives: [
    {
      directive: NgpDialogDescription,
      inputs: ['id:id'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteModalContentState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteModalContent {
  protected readonly config = injectFlowbiteModalContentConfig();

  /**
   * @see {@link injectFlowbiteModalContentConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteModalContentTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base, mergedTheme.host.transition),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteModalContentState<FlowbiteModalContent>(this);
}
