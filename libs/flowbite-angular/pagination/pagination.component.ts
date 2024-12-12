import {
  FLOWBITE_PAGINATION_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE,
  PaginationButtonDirective,
} from './pagination-button.directive';
import type { PaginationClass, PaginationNavigation, PaginationTheme } from './pagination.theme';
import { PaginationThemeService } from './pagination.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  InjectionToken,
  input,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<PaginationTheme>
>('FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE');

export const paginationDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

@Component({
  selector: 'flowbite-pagination',
  standalone: true,
  imports: [PaginationButtonDirective],
  template: `<nav [class]="contentClasses().navigationClass">
    @if (firstLast()) {
      <button
        type="button"
        (click)="firstPage()"
        [customStyle]="buttonCustomStyle()"
        flowbitePaginationButton>
        @switch (navigation()) {
          @case ('icon') {
            <<
          }
          @case ('text') {
            First
          }
          @case ('both') {
            << First
          }
        }
      </button>
    }

    @if (prevNext()) {
      <button
        type="button"
        (click)="previousPage()"
        [customStyle]="buttonCustomStyle()"
        flowbitePaginationButton>
        @switch (navigation()) {
          @case ('icon') {
            <
          }
          @case ('text') {
            Previous
          }
          @case ('both') {
            < Previous
          }
        }
      </button>
    }

    @for (page of visiblePages(); track $index) {
      <button
        type="button"
        (click)="changePage(page)"
        [customStyle]="buttonCustomStyle()"
        flowbitePaginationButton
        [active]="page === currentPage()">
        {{ page }}
      </button>
    }

    @if (prevNext()) {
      <button
        type="button"
        (click)="nextPage()"
        [customStyle]="buttonCustomStyle()"
        flowbitePaginationButton>
        @switch (navigation()) {
          @case ('icon') {
            >
          }
          @case ('text') {
            Next
          }
          @case ('both') {
            Next >
          }
        }
      </button>
    }

    @if (firstLast()) {
      <button
        type="button"
        (click)="lastPage()"
        [customStyle]="buttonCustomStyle()"
        flowbitePaginationButton>
        @switch (navigation()) {
          @case ('icon') {
            >>
          }
          @case ('text') {
            Last
          }
          @case ('both') {
            Last >>
          }
        }
      </button>
    }
  </nav>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent extends BaseComponent<PaginationClass> {
  public readonly themeService = inject(PaginationThemeService);

  readonly currentPage = model.required<number>();
  readonly totalItems = input.required<number>();
  readonly tabs = input(5);
  readonly pageSize = input(25);
  readonly prevNext = input(true);
  readonly firstLast = input(true);
  readonly navigation = input<keyof PaginationNavigation>('icon');

  public readonly firstPageToShow = computed(() => {
    if (this.currentPage() <= Math.floor(this.tabs() / 2)) {
      return 1;
    }

    if (this.currentPage() > this.maxPages() - Math.floor(this.tabs() / 2)) {
      return this.maxPages() - this.tabs() + 1;
    }

    return this.currentPage() - Math.floor(this.tabs() / 2);
  });

  readonly maxPages = computed(() => {
    return Math.max(Math.floor(this.totalItems() / this.pageSize()), 1);
  });

  readonly visiblePages = computed(() => {
    const pages: number[] = [];
    const visibleTabs = Math.min(this.tabs(), this.maxPages());

    for (let i = this.firstPageToShow(); i < this.firstPageToShow() + visibleTabs; i++) {
      pages.push(i);
    }

    return pages;
  });

  readonly visibleCurrentPage = computed(() => {
    return Math.min(this.currentPage(), this.maxPages());
  });

  public customStyle = model(inject(FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE));
  public buttonCustomStyle = model(inject(FLOWBITE_PAGINATION_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE));

  public override fetchClass(): PaginationClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }

  changePage(page: number) {
    this.currentPage.set(page);
  }

  previousPage() {
    if (this.visibleCurrentPage() === 1) return;
    this.currentPage.update((value) => value - 1);
  }

  nextPage() {
    if (this.visibleCurrentPage() === this.maxPages()) return;
    this.currentPage.update((value) => value + 1);
  }

  firstPage() {
    if (this.currentPage() === this.maxPages()) return;
    this.currentPage.set(1);
  }

  lastPage() {
    if (this.currentPage() === this.maxPages()) return;
    this.currentPage.set(this.maxPages());
  }
}
