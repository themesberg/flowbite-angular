import type {
  PaginationClass,
  PaginationNavigation,
  PaginationSizes,
  PaginationTheme,
} from './pagination.theme';
import { PaginationThemeService } from './pagination.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { ButtonComponent, type ButtonProperties, type ButtonTheme } from 'flowbite-angular/button';
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

export const FLOWBITE_PAGINATION_TABS_DEFAULT_VALUE = new InjectionToken<number>(
  'FLOWBITE_PAGINATION_TABS_DEFAULT_VALUE'
);

export const FLOWBITE_PAGINATION_PAGE_SIZE_DEFAULT_VALUE = new InjectionToken<number>(
  'FLOWBITE_PAGINATION_PAGE_SIZE_DEFAULT_VALUE'
);

export const FLOWBITE_PAGINATION_FIRSTLAST_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_PAGINATION_FIRSTLAST_DEFAULT_VALUE'
);

export const FLOWBITE_PAGINATION_PREVNEXT_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_PAGINATION_PREVNEXT_DEFAULT_VALUE'
);

export const FLOWBITE_PAGINATION_NAVIGATION_DEFAULT_VALUE = new InjectionToken<
  keyof PaginationNavigation
>('FLOWBITE_PAGINATION_NAVIGATION_DEFAULT_VALUE');

export const FLOWBITE_PAGINATION_SIZE_DEFAULT_VALUE = new InjectionToken<keyof PaginationSizes>(
  'FLOWBITE_PAGINATION_SIZE_DEFAULT_VALUE'
);

export const FLOWBITE_PAGINATION_BUTTON_PROPERTIES_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<ButtonProperties>
>('FLOWBITE_PAGINATION_BUTTON_PROPERTIES_DEFAULT_VALUE');

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
  {
    provide: FLOWBITE_PAGINATION_TABS_DEFAULT_VALUE,
    useValue: 5,
  },
  {
    provide: FLOWBITE_PAGINATION_PAGE_SIZE_DEFAULT_VALUE,
    useValue: 25,
  },
  {
    provide: FLOWBITE_PAGINATION_FIRSTLAST_DEFAULT_VALUE,
    useValue: true,
  },
  {
    provide: FLOWBITE_PAGINATION_PREVNEXT_DEFAULT_VALUE,
    useValue: true,
  },
  {
    provide: FLOWBITE_PAGINATION_NAVIGATION_DEFAULT_VALUE,
    useValue: 'icon',
  },
  {
    provide: FLOWBITE_PAGINATION_SIZE_DEFAULT_VALUE,
    useValue: 'md',
  },
  {
    provide: FLOWBITE_PAGINATION_BUTTON_PROPERTIES_DEFAULT_VALUE,
    useValue: {
      color: 'primary',
      fill: 'outline',
      customStyle: {
        root: {
          base: {
            default:
              'cursor-pointer !leading-tight !inline-flex !items-center !py-1.5 !ms-0 !place-content-center !rounded-none first:!rounded-l-lg last:!rounded-r-lg data-[active=false]:!text-inherit data-[active=false]:!border-inherit data-[active=false]:hover:!bg-gray-100 data-[active=false]:dark:hover:!bg-gray-700 data-[active=true]:!bg-opacity-75',
          },
          size: {
            sm: 'text-sm px-3 h-8',
            md: 'text-base px-4 h-10',
          },
        },
      } as DeepPartial<ButtonTheme>,
    } as DeepPartial<ButtonProperties>,
  },
]);

@Component({
  selector: 'flowbite-pagination',
  standalone: true,
  imports: [IconComponent, NgTemplateOutlet, ButtonComponent],
  template: `
    <nav
      [class]="contentClasses().navigationClass"
      [ariaLabel]="ariaLabel()">
      @if (firstLast()) {
        <flowbite-button
          type="button"
          data-active="false"
          (click)="goToFirstPage()"
          [color]="buttonProperties().color!"
          [fill]="buttonProperties().fill!"
          [size]="size()"
          [customStyle]="buttonProperties().customStyle!">
          @if (['icon', 'both'].includes(navigation())) {
            @if (lastIcon()) {
              <ng-container [ngTemplateOutlet]="lastIcon()!" />
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-double-right"
                [class]="contentClasses().iconClass"
                class="rotate-180" />
            }
          }
          @if (['text', 'both'].includes(navigation())) {
            <span>First</span>
          }
        </flowbite-button>
      }

      @if (prevNext()) {
        <flowbite-button
          type="button"
          data-active="false"
          (click)="goToPreviousPage()"
          [color]="buttonProperties().color!"
          [fill]="buttonProperties().fill!"
          [size]="size()"
          [customStyle]="buttonProperties().customStyle!">
          @if (['icon', 'both'].includes(navigation())) {
            @if (lastIcon()) {
              <ng-container [ngTemplateOutlet]="lastIcon()!" />
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-right"
                [class]="contentClasses().iconClass"
                class="rotate-180" />
            }
          }
          @if (['text', 'both'].includes(navigation())) {
            <span>Previous</span>
          }
        </flowbite-button>
      }

      @for (page of visiblePages(); track $index) {
        <flowbite-button
          type="button"
          [attr.data-active]="page === currentPage()"
          (click)="changePage(page)"
          [color]="buttonProperties().color!"
          [fill]="buttonProperties().fill!"
          [size]="size()"
          [customStyle]="buttonProperties().customStyle!">
          {{ page }}
        </flowbite-button>
      }

      @if (prevNext()) {
        <flowbite-button
          type="button"
          data-active="false"
          (click)="goToNextPage()"
          [color]="buttonProperties().color!"
          [fill]="buttonProperties().fill!"
          [size]="size()"
          [customStyle]="buttonProperties().customStyle!">
          @if (['icon', 'both'].includes(navigation())) {
            @if (lastIcon()) {
              <ng-container [ngTemplateOutlet]="lastIcon()!" />
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-right"
                [class]="contentClasses().iconClass" />
            }
          }
          @if (['text', 'both'].includes(navigation())) {
            <span>Next</span>
          }
        </flowbite-button>
      }

      @if (firstLast()) {
        <flowbite-button
          type="button"
          data-active="false"
          (click)="goToLastPage()"
          [color]="buttonProperties().color!"
          [fill]="buttonProperties().fill!"
          [size]="size()"
          [customStyle]="buttonProperties().customStyle!">
          @if (['icon', 'both'].includes(navigation())) {
            @if (lastIcon()) {
              <ng-container [ngTemplateOutlet]="lastIcon()!" />
            } @else {
              <flowbite-icon
                svgIcon="flowbite-angular:chevron-right"
                [class]="contentClasses().iconClass" />
            }
          }
          @if (['text', 'both'].includes(navigation())) {
            <span>Last</span>
          }
        </flowbite-button>
      }
    </nav>
  `,
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
  readonly totalItems = model.required<number>();
  /**
   * Value of how many tabs are displayed
   *
   * @default 5
   */
  readonly tabs = model(inject(FLOWBITE_PAGINATION_TABS_DEFAULT_VALUE));
  /**
   * Value of how many items are in a tab
   *
   * @default 25
   */
  readonly pageSize = model(inject(FLOWBITE_PAGINATION_PAGE_SIZE_DEFAULT_VALUE));
  /**
   * Whether to show or hide previous and next buttons
   *
   * @default true
   */
  readonly prevNext = model(inject(FLOWBITE_PAGINATION_PREVNEXT_DEFAULT_VALUE));
  /**
   * Whether to show or hide first and last buttons
   *
   * @default true
   */
  readonly firstLast = model(inject(FLOWBITE_PAGINATION_FIRSTLAST_DEFAULT_VALUE));
  /**
   * Value of the navigation button's type
   *
   * @default icon
   */
  readonly navigation = model(inject(FLOWBITE_PAGINATION_NAVIGATION_DEFAULT_VALUE));
  /**
   * Value of the component's size
   *
   * @default md
   */
  readonly size = model(inject(FLOWBITE_PAGINATION_SIZE_DEFAULT_VALUE));
  /**
   * Value of the next icon
   *
   * @default undefined
   */
  readonly nextIcon = model(inject(FLOWBITE_PAGINATION_NEXT_ICON_DEFAULT_VALUE));
  /**
   * Value of the last icon
   *
   * @default undefined
   */
  readonly lastIcon = model(inject(FLOWBITE_PAGINATION_LAST_ICON_DEFAULT_VALUE));
  /**
   * Value of the aria-label
   *
   * @default Pagination navigation
   */
  readonly ariaLabel = model('Pagination navigation');
  /**
   * Set the custom style for this pagination
   */
  public customStyle = model(inject(FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE));
  /**
   * Set the properties of all buttons in navigation
   *
   * @default {
      color: 'primary',
      fill: 'outline',
      customStyle: {
        root: {
          base: {
            default:
              'cursor-pointer !leading-tight !inline-flex !items-center !py-1.5 !ms-0 !place-content-center !rounded-none first:!rounded-l-lg last:!rounded-r-lg data-[active=false]:!text-inherit data-[active=false]:!border-inherit data-[active=false]:hover:!bg-gray-100 data-[active=false]:dark:hover:!bg-gray-700 data-[active=true]:!bg-opacity-75',
          },
          size: {
            sm: 'text-sm px-3 h-8',
            md: 'text-base px-4 h-10',
          },
        },
      },
    }
   */
  public readonly buttonProperties = model(
    inject(FLOWBITE_PAGINATION_BUTTON_PROPERTIES_DEFAULT_VALUE)
  );

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
  public readonly maxPages = computed(() => {
    return Math.max(Math.ceil(this.totalItems() / this.pageSize()), 1);
  });

  /**
   * Array of the visible page tabs
   */
  public readonly visiblePages = computed(() => {
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
  public readonly visibleCurrentPage = computed(() => {
    return Math.min(this.currentPage(), this.maxPages());
  });

  /**
   * Value of how many page tabs to display
   */
  public readonly visiblePagesCount = computed(() => {
    return Math.min(this.tabs(), this.maxPages());
  });

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
  public changePage(page: number) {
    if (this.visibleCurrentPage() === page) return;
    this.currentPage.set(page);
  }

  /**
   * Decreases the value of `currentPage` if it's bigger than 1
   */
  public goToPreviousPage() {
    if (this.visibleCurrentPage() === 1) return;
    this.currentPage.update((value) => value - 1);
  }

  /**
   * Increases the value of `currentPage` if it's smaller than `maxPages`
   */
  public goToNextPage() {
    if (this.visibleCurrentPage() === this.maxPages()) return;
    this.currentPage.update((value) => value + 1);
  }

  /**
   * Sets the value of `currentPage` to 1
   */
  public goToFirstPage() {
    if (this.currentPage() === 1) return;
    this.currentPage.set(1);
  }

  /**
   * Sets the value of `currentPage` equal to `maxPages`
   */
  public goToLastPage() {
    if (this.currentPage() === this.maxPages()) return;
    this.currentPage.set(this.maxPages());
  }
}
