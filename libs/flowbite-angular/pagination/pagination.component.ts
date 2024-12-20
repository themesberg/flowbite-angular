import {
  FLOWBITE_PAGINATION_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE,
  PaginationButtonDirective,
} from './pagination-button.directive';
import type {
  PaginationClass,
  PaginationNavigation,
  PaginationSizes,
  PaginationTheme,
} from './pagination.theme';
import { PaginationThemeService } from './pagination.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { CHEVRON_DOUBLE_RIGHT_SVG_ICON, CHEVRON_RIGHT_SVG_ICON } from 'flowbite-angular/utils';

import { NgTemplateOutlet } from '@angular/common';
import type { TemplateRef } from '@angular/core';
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
import { DomSanitizer } from '@angular/platform-browser';

export const FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<PaginationTheme>
>('FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE');

export const FLOWBITE_PAGINATION_NEXT_ICON_DEFAULT_VALUE = new InjectionToken<
  TemplateRef<unknown> | undefined
>('FLOWBITE_PAGINATION_NEXT_ICON_DEFAULT_VALUE');

export const FLOWBITE_PAGINATION_LAST_ICON_DEFAULT_VALUE = new InjectionToken<
  TemplateRef<unknown> | undefined
>('FLOWBITE_PAGINATION_LAST_ICON_DEFAULT_VALUE');

export const paginationDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
  {
    provide: FLOWBITE_PAGINATION_NEXT_ICON_DEFAULT_VALUE,
    useValue: undefined,
  },
  {
    provide: FLOWBITE_PAGINATION_LAST_ICON_DEFAULT_VALUE,
    useValue: undefined,
  },
]);

@Component({
  selector: 'flowbite-pagination',
  standalone: true,
  imports: [PaginationButtonDirective, IconComponent, NgTemplateOutlet],
  template: `<nav
    [class]="contentClasses().navigationClass"
    [ariaLabel]="ariaLabel()">
    @if (firstLast()) {
      <button
        type="button"
        (click)="firstPage()"
        [customStyle]="buttonCustomStyle()"
        [size]="size()"
        flowbitePaginationButton>
        @switch (navigation()) {
          @case ('icon') {
            @if (lastIcon()) {
              <div class="rotate-180">
                <ng-container [ngTemplateOutlet]="lastIcon()!" />
              </div>
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-double-right"
                [class]="contentClasses().iconClass"
                class="rotate-180" />
            }
          }
          @case ('text') {
            <span>First</span>
          }
          @case ('both') {
            @if (lastIcon()) {
              <div class="rotate-180">
                <ng-container [ngTemplateOutlet]="lastIcon()!" />
              </div>
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-double-right"
                [class]="contentClasses().iconClass"
                class="rotate-180" />
            }
            <span>First</span>
          }
        }
      </button>
    }

    @if (prevNext()) {
      <button
        type="button"
        (click)="previousPage()"
        [customStyle]="buttonCustomStyle()"
        [size]="size()"
        flowbitePaginationButton>
        @switch (navigation()) {
          @case ('icon') {
            @if (nextIcon()) {
              <div class="rotate-180">
                <ng-container [ngTemplateOutlet]="nextIcon()!" />
              </div>
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-right"
                [class]="contentClasses().iconClass"
                class="rotate-180" />
            }
          }
          @case ('text') {
            <span>Previous</span>
          }
          @case ('both') {
            @if (nextIcon()) {
              <div class="rotate-180">
                <ng-container [ngTemplateOutlet]="nextIcon()!" />
              </div>
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-right"
                [class]="contentClasses().iconClass"
                class="rotate-180" />
            }
            <span>Previous</span>
          }
        }
      </button>
    }

    @for (page of visiblePages(); track $index) {
      <button
        type="button"
        (click)="changePage(page)"
        [customStyle]="buttonCustomStyle()"
        [size]="size()"
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
        [size]="size()"
        flowbitePaginationButton>
        @switch (navigation()) {
          @case ('icon') {
            @if (nextIcon()) {
              <ng-container [ngTemplateOutlet]="nextIcon()!" />
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-right"
                [class]="contentClasses().iconClass" />
            }
          }
          @case ('text') {
            <span>Next</span>
          }
          @case ('both') {
            <span>Next</span>
            @if (nextIcon()) {
              <ng-container [ngTemplateOutlet]="nextIcon()!" />
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-right"
                [class]="contentClasses().iconClass" />
            }
          }
        }
      </button>
    }

    @if (firstLast()) {
      <button
        type="button"
        (click)="lastPage()"
        [customStyle]="buttonCustomStyle()"
        [size]="size()"
        flowbitePaginationButton>
        @switch (navigation()) {
          @case ('icon') {
            @if (lastIcon()) {
              <ng-container [ngTemplateOutlet]="lastIcon()!" />
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-double-right"
                [class]="contentClasses().iconClass" />
            }
          }
          @case ('text') {
            <span>Last</span>
          }
          @case ('both') {
            <span>Last</span>
            @if (lastIcon()) {
              <ng-container [ngTemplateOutlet]="lastIcon()!" />
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-double-right"
                [class]="contentClasses().iconClass" />
            }
          }
        }
      </button>
    }
  </nav>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent extends BaseComponent<PaginationClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(PaginationThemeService);
  /**
   * `IconRegistry` service
   */
  public readonly iconRegistry = inject(IconRegistry);
  /**
   * `DomSanitizer` service
   */
  public readonly domSanitizer = inject(DomSanitizer);

  /**
   * Value of the current page
   *
   * @required
   */
  readonly currentPage = model.required<number>();
  /**
   * Value of the total items
   *
   * @required
   */
  readonly totalItems = input.required<number>();
  /**
   * Value of how many tabs are displayed
   *
   * @default 5
   */
  readonly tabs = input(5);
  /**
   * Value of how many items are in a tab
   *
   * @default 25
   */
  readonly pageSize = input(25);
  /**
   * Whether to show or hide previous and next buttons
   *
   * @default true
   */
  readonly prevNext = input(true);
  /**
   * Whether to show or hide first and last buttons
   *
   * @default true
   */
  readonly firstLast = input(true);
  /**
   * Value of the navigation button's type
   *
   * @default icon
   */
  readonly navigation = input<keyof PaginationNavigation>('icon');
  /**
   * Value of the component's size
   *
   * @default md
   */
  readonly size = input<keyof PaginationSizes>('md');
  /**
   * Value of the next icon
   *
   * @default undefined
   */
  readonly nextIcon = input(inject(FLOWBITE_PAGINATION_NEXT_ICON_DEFAULT_VALUE));
  /**
   * Value of the last icon
   *
   * @default undefined
   */
  readonly lastIcon = input(inject(FLOWBITE_PAGINATION_LAST_ICON_DEFAULT_VALUE));
  /**
   * Value of the aria-label
   *
   * @default Pagination navigation
   */
  readonly ariaLabel = input('Pagination navigation');

  /**
   * Value of the first visible page
   */
  public readonly firstPageToShow = computed(() => {
    if (this.currentPage() <= Math.floor(this.tabs() / 2)) {
      return 1;
    }

    if (this.currentPage() > this.maxPages() - Math.ceil(this.tabs() / 2)) {
      return this.maxPages() - this.visiblePagesCount() + 1;
    }

    return this.currentPage() - Math.floor(this.tabs() / 2);
  });

  /**
   * Value of the maximum pages calculated from `totalItems`
   */
  readonly maxPages = computed(() => {
    return Math.max(Math.ceil(this.totalItems() / this.pageSize()), 1);
  });

  /**
   * Array of the visible page tabs
   */
  readonly visiblePages = computed(() => {
    const pages: number[] = [];

    for (
      let i = this.firstPageToShow();
      i < this.firstPageToShow() + this.visiblePagesCount();
      i++
    ) {
      pages.push(i);
    }

    return pages;
  });

  /**
   * Real value of the current page
   *
   * If the given `currentPage` is bigger than the `maxPages`,
   * the last page will be the active one
   */
  readonly visibleCurrentPage = computed(() => {
    return Math.min(this.currentPage(), this.maxPages());
  });

  /**
   * Value of how many page tabs to display
   */
  readonly visiblePagesCount = computed(() => {
    return Math.min(this.tabs(), this.maxPages());
  });

  /**
   * Set the custom style for this pagination
   */
  public customStyle = model(inject(FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE));
  /**
   * Set the custom style for this pagination's button
   */
  public buttonCustomStyle = model(inject(FLOWBITE_PAGINATION_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE));

  //#region BaseComponent implementation
  public override fetchClass(): PaginationClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
      size: this.size(),
    });
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-right',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_RIGHT_SVG_ICON)
    );

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-double-right',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOUBLE_RIGHT_SVG_ICON)
    );
  }
  //#endregion

  /**
   * Sets the value of the `currentPage`
   * @param page number of the active page
   */
  changePage(page: number) {
    if (this.visibleCurrentPage() === page) return;
    this.currentPage.set(page);
  }

  /**
   * Decreases the value of `currentPage` if it's bigger than 1
   */
  previousPage() {
    if (this.visibleCurrentPage() === 1) return;
    this.currentPage.update((value) => value - 1);
  }

  /**
   * Increases the value of `currentPage` if it's smaller than `maxPages`
   */
  nextPage() {
    if (this.visibleCurrentPage() === this.maxPages()) return;
    this.currentPage.update((value) => value + 1);
  }

  /**
   * Sets the value of `currentPage` to 1
   */
  firstPage() {
    if (this.currentPage() === 1) return;
    this.currentPage.set(1);
  }

  /**
   * Sets the value of `currentPage` equal to `maxPages`
   */
  lastPage() {
    if (this.currentPage() === this.maxPages()) return;
    this.currentPage.set(this.maxPages());
  }
}
