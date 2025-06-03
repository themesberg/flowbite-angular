import { injectFlowbiteModalContentConfig } from '../config/modal-content-config';
import { flowbiteModalContentState, provideFlowbiteModalContentState } from './modal-content-state';
import type { FlowbiteModalContentTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { NgpDialogDescription } from 'ng-primitives/dialog';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    div[flowbiteModalContent]
  `,
  exportAs: 'flowbiteModalContent',
  hostDirectives: [
    {
      directive: NgpDialogDescription,
      inputs: ['id:id'],
      outputs: [],
    },
  ],
  imports: [],
  providers: [provideFlowbiteModalContentState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        root: twMerge(mergedTheme.host.base),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteModalContentState<FlowbiteModalContent>(this);
}
