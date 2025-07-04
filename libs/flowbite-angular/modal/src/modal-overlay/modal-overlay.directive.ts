import { injectFlowbiteModalOverlayConfig } from '../config/modal-overlay-config';
import { flowbiteModalOverlayState, provideFlowbiteModalOverlayState } from './modal-overlay-state';
import type { FlowbiteModalOverlayPositions, FlowbiteModalOverlayTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpDialogOverlay } from 'ng-primitives/dialog';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    div[flowbiteModalOverlay]
  `,
  exportAs: 'flowbiteModalOverlay',
  hostDirectives: [
    {
      directive: NgpDialogOverlay,
      inputs: ['ngpDialogOverlayCloseOnClick:closeOnClick'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteModalOverlayState()],
  host: { '[class]': `theme().host.root` },
})
export class ModalOverlay {
  protected readonly config = injectFlowbiteModalOverlayConfig();

  /**
   * @see {@link injectFlowbiteModalOverlayConfig}
   */
  readonly position = input<keyof FlowbiteModalOverlayPositions>(this.config.position);
  /**
   * @see {@link injectFlowbiteModalOverlayConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteModalOverlayTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.position[this.state.position()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteModalOverlayState<ModalOverlay>(this);
}
