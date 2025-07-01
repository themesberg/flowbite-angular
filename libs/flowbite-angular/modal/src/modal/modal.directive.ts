import { injectFlowbiteModalConfig } from '../config/modal-config';
import { flowbiteModalState, provideFlowbiteModalState } from './modal-state';
import type { FlowbiteModalSizes, FlowbiteModalTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpDialog } from 'ng-primitives/dialog';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    div[flowbiteModal],
    section[flowbiteModal]
  `,
  exportAs: 'flowbiteModal',
  hostDirectives: [
    {
      directive: NgpDialog,
      inputs: ['id:id', 'ngpDialogRole:role', 'ngpDialogModal:modal'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteModalState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteModal {
  protected readonly config = injectFlowbiteModalConfig();

  /**
   * @see {@link injectFlowbiteModalConfig}
   */
  readonly size = input<keyof FlowbiteModalSizes>(this.config.size);
  /**
   * @see {@link injectFlowbiteModalConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteModalTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.size[this.state.size()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteModalState<FlowbiteModal>(this);
}
