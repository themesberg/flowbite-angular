import { injectFlowbitePaginationNextConfig } from '../config/pagination-next-config';
import {
  flowbitePaginationNextState,
  provideFlowbitePaginationNextState,
} from './pagination-next-state';
import type {
  FlowbitePaginationNextColors,
  FlowbitePaginationNextSizes,
  FlowbitePaginationNextTheme,
} from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { chevronRight } from 'flowbite-angular/icon/outline/arrows';

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
import { NgpPaginationNext } from 'ng-primitives/pagination';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    button[flowbitePaginationNext]
  `,
  exportAs: 'flowbitePaginationNext',
  hostDirectives: [
    {
      directive: NgpPaginationNext,
      inputs: ['ngpPaginationNextDisabled:disabled'],
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
    provideFlowbitePaginationNextState(),
    provideButtonState(),
    provideIcons({ chevronRight }),
  ],
  host: { '[class]': `theme().host.root` },
  template: `
    <flowbite-icon
      [size]="state.size()"
      name="chevronRight" />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbitePaginationNextComponent {
  protected readonly config = injectFlowbitePaginationNextConfig();

  /**
   * @see {@link injectFlowbitePaginationNextConfig}
   */
  readonly color = input<keyof FlowbitePaginationNextColors>(this.config.color);
  /**
   * @see {@link injectFlowbitePaginationNextConfig}
   */
  readonly size = input<keyof FlowbitePaginationNextSizes>(this.config.size);
  /**
   * @see {@link injectFlowbitePaginationNextConfig}
   */
  readonly outline = input<boolean, BooleanInput>(this.config.outline, {
    transform: booleanAttribute,
  });
  /**
   * @see {@link injectFlowbitePaginationFirstConfig}
   */
  /**
   * @see {@link injectFlowbitePaginationNextConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbitePaginationNextTheme>>(this.config.customTheme);

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
  readonly state = flowbitePaginationNextState<FlowbitePaginationNextComponent>(this);
}
