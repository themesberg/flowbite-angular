import { injectFlowbiteModalConfig } from '../config/modal-config';
import { flowbiteModalState, provideFlowbiteModalState } from './modal-state';
import type { FlowbiteModalSizes, FlowbiteModalTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { NgpDialog } from 'ng-primitives/dialog';
import { twMerge } from 'tailwind-merge';

@Component({
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
  imports: [],
  providers: [provideFlowbiteModalState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteModalComponent {
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
        root: twMerge(mergedTheme.host.base, mergedTheme.host.size[this.state.size()]),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteModalState<FlowbiteModalComponent>(this);
}
