import type { PaginationClass, PaginationNavigation } from './pagination.theme';
import { PaginationThemeService } from './pagination.theme.service';

import { BaseComponent } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'flowbite-pagination',
  standalone: true,
  template: `<nav [class]="contentClasses().navigationClass">
    @if (firstLast()) {
      <button
        type="button"
        (click)="firstPage()"
        [class]="contentClasses().listItemClass">
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
        [class]="contentClasses().listItemClass">
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
        [class]="contentClasses().listItemClass">
        {{ page }}
      </button>
    }

    @if (prevNext()) {
      <button
        type="button"
        (click)="nextPage()"
        [class]="contentClasses().listItemClass">
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
        [class]="contentClasses().listItemClass">
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
  private readonly _themeService = inject(PaginationThemeService);

  readonly currentPage = model.required<number>();
  readonly totalItems = input.required<number>();
  readonly tabs = input(5);
  readonly pageSize = input(25);
  readonly prevNext = input(true);
  readonly firstLast = input(true);
  readonly navigation = input<keyof PaginationNavigation>('icon');

  private readonly _firstPage = computed(() => {
    if (this.currentPage() <= Math.floor(this.tabs() / 2)) {
      return 1;
    }

    if (this.currentPage() > this._maxPages() - Math.floor(this.tabs() / 2)) {
      return this._maxPages() - this.tabs() + 1;
    }

    return this.currentPage() - Math.floor(this.tabs() / 2);
  });

  private readonly _maxPages = computed(() => {
    return Math.max(Math.floor(this.totalItems() / this.pageSize()), 1);
  });

  readonly visiblePages = computed(() => {
    const pages: number[] = [];
    const visibleTabs = Math.min(this.tabs(), this._maxPages());

    for (let i = this._firstPage(); i < this._firstPage() + visibleTabs; i++) {
      pages.push(i);
    }

    return pages;
  });

  readonly visibleCurrentPage = computed(() => {
    return Math.min(this.currentPage(), this._maxPages());
  });

  public override fetchClass(): PaginationClass {
    return this._themeService.getClasses({
      customStyle: {},
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
    if (this.visibleCurrentPage() === this._maxPages()) return;
    this.currentPage.update((value) => value + 1);
  }

  firstPage() {
    if (this.currentPage() === this._maxPages()) return;
    this.currentPage.set(1);
  }

  lastPage() {
    if (this.currentPage() === this._maxPages()) return;
    this.currentPage.set(this._maxPages());
  }
}
