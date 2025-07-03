import { injectFlowbiteModalFooterConfig } from '../config/modal-footer-config';
import { flowbiteModalFooterState, provideFlowbiteModalFooterState } from './modal-footer-state';
import type { FlowbiteModalFooterTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    div[flowbiteModalFooter]
  `,
  exportAs: 'flowbiteModalFooter',
  hostDirectives: [],
  providers: [provideFlowbiteModalFooterState()],
  host: { '[class]': `theme().host.root` },
})
export class ModalFooter {
  protected readonly config = injectFlowbiteModalFooterConfig();

  /**
   * @see {@link injectFlowbiteModalFooterConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteModalFooterTheme>>(this.config.customTheme);

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
  readonly state = flowbiteModalFooterState<ModalFooter>(this);
}
