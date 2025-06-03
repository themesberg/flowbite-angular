import { injectFlowbiteModalFooterConfig } from '../config/modal-footer-config';
import { flowbiteModalFooterState, provideFlowbiteModalFooterState } from './modal-footer-state';
import type { FlowbiteModalFooterTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    div[flowbiteModalFooter]
  `,
  exportAs: 'flowbiteModalFooter',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteModalFooterState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteModalFooter {
  protected readonly config = injectFlowbiteModalFooterConfig();

  /**
   * @see {@link injectFlowbiteModalFooterConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteModalFooterTheme>>(this.config.customTheme);

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
  readonly state = flowbiteModalFooterState<FlowbiteModalFooter>(this);
}
