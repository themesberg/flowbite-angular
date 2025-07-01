import { injectFlowbiteModalHeaderConfig } from '../config/modal-header-config';
import { flowbiteModalHeaderState, provideFlowbiteModalHeaderState } from './modal-header-state';
import type { FlowbiteModalHeaderTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { NgpDialogTitle } from 'ng-primitives/dialog';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    h1[flowbiteModalHeader],
    h2[flowbiteModalHeader],
    h3[flowbiteModalHeader],
    h4[flowbiteModalHeader],
    h5[flowbiteModalHeader],
    h6[flowbiteModalHeader]
  `,
  exportAs: 'flowbiteModalHeader',
  hostDirectives: [
    {
      directive: NgpDialogTitle,
      inputs: ['id:id'],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteModalHeaderState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteModalHeader {
  protected readonly config = injectFlowbiteModalHeaderConfig();

  /**
   * @see {@link injectFlowbiteModalHeaderConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteModalHeaderTheme>>(this.config.customTheme);

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
  readonly state = flowbiteModalHeaderState<FlowbiteModalHeader>(this);
}
