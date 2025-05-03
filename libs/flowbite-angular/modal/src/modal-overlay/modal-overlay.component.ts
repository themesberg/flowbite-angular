import { injectFlowbiteModalOverlayConfig } from '../config/modal-overlay-config';
import { flowbiteModalOverlayState, provideFlowbiteModalOverlayState } from './modal-overlay-state';
import type { FlowbiteModalOverlayPositions, FlowbiteModalOverlayTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { NgpDialogOverlay } from 'ng-primitives/dialog';
import { twMerge } from 'tailwind-merge';

@Component({
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
  imports: [],
  providers: [provideFlowbiteModalOverlayState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteModalOverlayComponent {
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
        root: twMerge(mergedTheme.host.base, mergedTheme.host.position[this.state.position()]),
      },
    };
  });

  protected readonly state = flowbiteModalOverlayState<FlowbiteModalOverlayComponent>(this);
}
