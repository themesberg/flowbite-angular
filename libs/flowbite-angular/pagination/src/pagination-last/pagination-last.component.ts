import { injectFlowbitePaginationLastConfig } from '../config/pagination-last-config';
import {
  flowbitePaginationLastState,
  provideFlowbitePaginationLastState,
} from './pagination-last-state';
import type {
  FlowbitePaginationLastColors,
  FlowbitePaginationLastSizes,
  FlowbitePaginationLastTheme,
} from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteIcon } from 'flowbite-angular/icon';
import { chevronDoubleRight } from 'flowbite-angular/icon/outline/arrows';

import type { BooleanInput } from '@angular/cdk/coercion';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { provideButtonState } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { NgpPaginationLast } from 'ng-primitives/pagination';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    button[flowbitePaginationLast]
  `,
  exportAs: 'flowbitePaginationLast',
  hostDirectives: [
    {
      directive: NgpPaginationLast,
      inputs: ['ngpPaginationLastDisabled:disabled'],
      outputs: [],
    },
    {
      directive: NgpFocus,
      inputs: [],
      outputs: [],
    },
  ],
  imports: [FlowbiteIcon],
  providers: [
    provideFlowbitePaginationLastState(),
    provideButtonState(),
    provideIcons({ chevronDoubleRight }),
  ],
  host: { '[class]': `theme().host.root` },
  template: `
    <flowbite-icon
      [size]="state.size()"
      name="chevronDoubleRight" />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbitePaginationLast {
  protected readonly config = injectFlowbitePaginationLastConfig();

  /**
   * @see {@link injectFlowbitePaginationLastConfig}
   */
  readonly color = input<keyof FlowbitePaginationLastColors>(this.config.color);
  /**
   * @see {@link injectFlowbitePaginationLastConfig}
   */
  readonly size = input<keyof FlowbitePaginationLastSizes>(this.config.size);
  /**
   * @see {@link injectFlowbitePaginationLastConfig}
   */
  readonly outline = input<boolean, BooleanInput>(this.config.outline, {
    transform: booleanAttribute,
  });
  /**
   * @see {@link injectFlowbitePaginationLastConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbitePaginationLastTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.focus,
          mergedTheme.host.disabled,
          mergedTheme.host.size[this.state.size()],
          mergedTheme.host.colorOutline[this.state.color()]
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbitePaginationLastState<FlowbitePaginationLast>(this);
}
