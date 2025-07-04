import { injectFlowbitePaginationPreviousConfig } from '../config/pagination-previous-config';
import {
  flowbitePaginationPreviousState,
  provideFlowbitePaginationPreviousState,
} from './pagination-previous-state';
import type {
  FlowbitePaginationPreviousColors,
  FlowbitePaginationPreviousSizes,
  FlowbitePaginationPreviousTheme,
} from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { Icon } from 'flowbite-angular/icon';
import { chevronLeft } from 'flowbite-angular/icon/outline/arrows';

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
import { NgpPaginationPrevious } from 'ng-primitives/pagination';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    button[flowbitePaginationPrevious]
  `,
  exportAs: 'flowbitePaginationPrevious',
  hostDirectives: [
    {
      directive: NgpPaginationPrevious,
      inputs: ['ngpPaginationPreviousDisabled:disabled'],
      outputs: [],
    },
    {
      directive: NgpFocus,
      inputs: [],
      outputs: [],
    },
  ],
  imports: [Icon],
  providers: [
    provideFlowbitePaginationPreviousState(),
    provideButtonState(),
    provideIcons({ chevronLeft }),
  ],
  host: { '[class]': `theme().host.root` },
  template: `<flowbite-icon name="chevronLeft" />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationPrevious {
  protected readonly config = injectFlowbitePaginationPreviousConfig();

  /**
   * @see {@link injectFlowbitePaginationPreviousConfig}
   */
  readonly color = input<keyof FlowbitePaginationPreviousColors>(this.config.color);
  /**
   * @see {@link injectFlowbitePaginationPreviousConfig}
   */
  readonly size = input<keyof FlowbitePaginationPreviousSizes>(this.config.size);
  /**
   * @see {@link injectFlowbitePaginationPreviousConfig}
   */
  readonly outline = input<boolean, BooleanInput>(this.config.outline, {
    transform: booleanAttribute,
  });
  /**
   * @see {@link injectFlowbitePaginationPreviousConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbitePaginationPreviousTheme>>(
    this.config.customTheme
  );

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
          colorToTheme(mergedTheme.host.colorOutline, this.state.color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbitePaginationPreviousState<PaginationPrevious>(this);
}
