import { injectFlowbiteSkeletonConfig } from '../config/skeleton-config';
import { flowbiteSkeletonState, provideFlowbiteSkeletonState } from './skeleton-state';
import type { FlowbiteSkeletonTheme } from './theme';

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
    div[flowbiteSkeleton]
  `,
  exportAs: 'flowbiteSkeleton',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteSkeletonState()],
  host: {
    '[class]': `theme().host.root`,
    '[attr.role]': 'status',
  },
  template: `
    @for (i of [].constructor(count()); track $index) {
      <div [class]="theme().item.root"></div>
    }
    <span class="sr-only">Loading...</span>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteSkeletonComponent {
  protected readonly config = injectFlowbiteSkeletonConfig();

  /**
   * @see {@link injectFlowbiteSkeletonConfig}
   */
  readonly count = input<number>(this.config.count);
  /**
   * @see {@link injectFlowbiteSkeletonConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteSkeletonTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base),
      },
      item: {
        root: twMerge(mergedTheme.item.base),
      },
    };
  });

  protected readonly state = flowbiteSkeletonState<FlowbiteSkeletonComponent>(this);
}
