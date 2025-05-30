import { injectFlowbitePaginationFirstConfig } from '../config/pagination-first-config';
import {
  flowbitePaginationFirstState,
  provideFlowbitePaginationFirstState,
} from './pagination-first-state';
import type {
  FlowbitePaginationFirstColors,
  FlowbitePaginationFirstSizes,
  FlowbitePaginationFirstTheme,
} from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { chevronDoubleLeft } from 'flowbite-angular/icon/outline/arrows';

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
import { NgpPaginationFirst } from 'ng-primitives/pagination';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    button[flowbitePaginationFirst]
  `,
  exportAs: 'flowbitePaginationFirst',
  hostDirectives: [
    {
      directive: NgpPaginationFirst,
      inputs: ['ngpPaginationFirstDisabled:disabled'],
      outputs: [],
    },
    {
      directive: NgpFocus,
      inputs: [],
      outputs: [],
    },
  ],
  imports: [FlowbiteIconComponent],
  providers: [
    provideFlowbitePaginationFirstState(),
    provideButtonState(),
    provideIcons({ chevronDoubleLeft }),
  ],
  host: { '[class]': `theme().host.root` },
  template: `
    <flowbite-icon
      [flowbiteSize]="state.size()"
      name="chevronDoubleLeft" />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbitePaginationFirstComponent {
  protected readonly config = injectFlowbitePaginationFirstConfig();

  /**
   * @see {@link injectFlowbitePaginationFirstConfig}
   */
  readonly color = input<keyof FlowbitePaginationFirstColors>(this.config.color);
  /**
   * @see {@link injectFlowbitePaginationFirstConfig}
   */
  readonly size = input<keyof FlowbitePaginationFirstSizes>(this.config.size);
  /**
   * @see {@link injectFlowbitePaginationFirstConfig}
   */
  readonly outline = input<boolean, BooleanInput>(this.config.outline, {
    transform: booleanAttribute,
  });
  /**
   * @see {@link injectFlowbitePaginationFirstConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbitePaginationFirstTheme>>(this.config.customTheme);

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
  readonly state = flowbitePaginationFirstState<FlowbitePaginationFirstComponent>(this);
}
