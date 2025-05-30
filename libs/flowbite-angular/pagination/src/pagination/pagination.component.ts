import { injectFlowbitePaginationConfig } from '../config/pagination-config';
import { FlowbitePaginationButtonComponent } from '../pagination-button/pagination-button.component';
import { FlowbitePaginationFirstComponent } from '../pagination-first/pagination-first.component';
import { FlowbitePaginationLastComponent } from '../pagination-last/pagination-last.component';
import { FlowbitePaginationNextComponent } from '../pagination-next/pagination-next.component';
import { FlowbitePaginationPreviousComponent } from '../pagination-previous/pagination-previous.component';
import { flowbitePaginationState, provideFlowbitePaginationState } from './pagination-state';
import type {
  FlowbitePaginationColors,
  FlowbitePaginationSizes,
  FlowbitePaginationTheme,
} from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import {
  chevronDoubleLeft,
  chevronDoubleRight,
  chevronLeft,
  chevronRight,
} from 'flowbite-angular/icon/outline/arrows';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { injectPaginationState, NgpPagination } from 'ng-primitives/pagination';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    nav[flowbitePagination]
  `,
  exportAs: 'flowbitePagination',
  hostDirectives: [
    {
      directive: NgpPagination,
      inputs: [
        'ngpPaginationPage:page',
        'ngpPaginationPageCount:pageCount',
        'ngpPaginationDisabled:disabled',
      ],
      outputs: ['ngpPaginationPageChange:pageChange'],
    },
  ],
  imports: [
    FlowbitePaginationLastComponent,
    FlowbitePaginationNextComponent,
    FlowbitePaginationFirstComponent,
    FlowbitePaginationButtonComponent,
    FlowbitePaginationPreviousComponent,
  ],
  providers: [
    provideFlowbitePaginationState(),
    provideIcons({ chevronLeft, chevronDoubleLeft, chevronRight, chevronDoubleRight }),
  ],
  host: { '[class]': `theme().host.root` },
  template: `
    <ul [class]="theme().container.root">
      <li>
        <button
          flowbitePaginationFirst
          outline
          [color]="state.color()"
          [size]="state.size()"
          aria-label="First Page"></button>
      </li>
      <li>
        <button
          flowbitePaginationPrevious
          outline
          [color]="state.color()"
          [size]="state.size()"
          aria-label="Previous Page"></button>
      </li>
      @for (page of visiblePages(); track $index) {
        <li>
          <button
            flowbitePaginationButton
            outline
            [color]="state.color()"
            [size]="state.size()"
            [page]="page"
            aria-label="Previous Page">
            {{ page }}
          </button>
        </li>
      }
      <li>
        <button
          flowbitePaginationNext
          outline
          [color]="state.color()"
          [size]="state.size()"
          aria-label="Next Page"></button>
      </li>
      <li>
        <button
          flowbitePaginationLast
          outline
          [color]="state.color()"
          [size]="state.size()"
          aria-label="Last Page"></button>
      </li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbitePaginationComponent {
  protected readonly paginationState = injectPaginationState();
  protected readonly config = injectFlowbitePaginationConfig();

  /**
   * Value of how many page tabs to display
   */
  public readonly visiblePagesCount = computed(() => {
    return Math.min(this.state.tabs(), this.paginationState().pageCount());
  });
  /**
   * Value of the first visible page
   */
  public readonly firstPageToShow = computed(() => {
    if (this.paginationState().page() <= Math.floor(this.state.tabs() / 2)) {
      return 1;
    }

    if (
      this.paginationState().page() >
      this.paginationState().pageCount() - Math.ceil(this.state.tabs() / 2)
    ) {
      return this.paginationState().pageCount() - this.visiblePagesCount() + 1;
    }

    return this.paginationState().page() - Math.floor(this.tabs() / 2);
  });
  /**
   * Array of the visible page tabs
   */
  public readonly visiblePages = computed(() => {
    return Array.from({ length: this.visiblePagesCount() }, (_, i) => this.firstPageToShow() + i);
  });

  protected readonly pages = computed(() =>
    Array.from({ length: this.paginationState().pageCount() }).map((_, i) => i + 1)
  );

  /**
   * @see {@link injectFlowbitePaginationConfig}
   */
  readonly tabs = input<number>(this.config.tabs);
  /**
   * @see {@link injectFlowbitePaginationConfig}
   */
  readonly color = input<keyof FlowbitePaginationColors>(this.config.color);
  /**
   * @see {@link injectFlowbitePaginationConfig}
   */
  readonly size = input<keyof FlowbitePaginationSizes>(this.config.size);

  /**
   * @see {@link injectFlowbitePaginationConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbitePaginationTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base),
      },
      container: {
        root: twMerge(mergedTheme.container.base),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbitePaginationState<FlowbitePaginationComponent>(this);
}
