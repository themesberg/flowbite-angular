import { injectFlowbitePaginationButtonConfig } from '../config/pagination-button-config';
import {
  flowbitePaginationButtonState,
  provideFlowbitePaginationButtonState,
} from './pagination-button-state';
import type {
  FlowbitePaginationButtonColors,
  FlowbitePaginationButtonSizes,
  FlowbitePaginationButtonTheme,
} from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';

import type { BooleanInput } from '@angular/cdk/coercion';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { provideButtonState } from 'ng-primitives/button';
import { NgpFocus } from 'ng-primitives/interactions';
import { NgpPaginationButton } from 'ng-primitives/pagination';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    button[flowbitePaginationButton]
  `,
  exportAs: 'flowbitePaginationButton',
  hostDirectives: [
    {
      directive: NgpPaginationButton,
      inputs: [' ngpPaginationButtonDisabled:disabled', 'ngpPaginationButtonPage:page'],
      outputs: [],
    },
    {
      directive: NgpFocus,
      inputs: [],
      outputs: [],
    },
  ],
  imports: [],
  providers: [provideFlowbitePaginationButtonState(), provideButtonState()],
  host: { '[class]': `theme().host.root` },
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbitePaginationButton {
  protected readonly config = injectFlowbitePaginationButtonConfig();

  /**
   * @see {@link injectFlowbitePaginationFirstConfig}
   */
  readonly color = input<keyof FlowbitePaginationButtonColors>(this.config.color);
  /**
   * @see {@link injectFlowbitePaginationFirstConfig}
   */
  readonly size = input<keyof FlowbitePaginationButtonSizes>(this.config.size);
  /**
   * @see {@link injectFlowbitePaginationFirstConfig}
   */
  readonly outline = input<boolean, BooleanInput>(this.config.outline, {
    transform: booleanAttribute,
  });
  /**
   * @see {@link injectFlowbitePaginationButtonConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbitePaginationButtonTheme>>(this.config.customTheme);

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
  readonly state = flowbitePaginationButtonState<FlowbitePaginationButton>(this);
}
