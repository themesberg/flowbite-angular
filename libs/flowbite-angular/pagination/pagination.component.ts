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
import {
  CHEVRON_DOUBLE_LEFT_SVG_ICON,
  CHEVRON_DOUBLE_RIGHT_SVG_ICON,
  CHEVRON_LEFT_SVG_ICON,
  CHEVRON_RIGHT_SVG_ICON,
} from 'flowbite-angular/utils';

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

export const FLOWBITE_PAGINATION_CURRENT_PAGE_DEFAULT_VALUE = new InjectionToken<number>(
  'FLOWBITE_PAGINATION_CURRENT_PAGE_DEFAULT_VALUE'
);

export const FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<PaginationTheme>
>('FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE');

export const FLOWBITE_PAGINATION_PREVIOUS_ICON_DEFAULT_VALUE = new InjectionToken<
  TemplateRef<unknown> | undefined
>('FLOWBITE_PAGINATION_PREVIOUS_ICON_DEFAULT_VALUE');

export const FLOWBITE_PAGINATION_NEXT_ICON_DEFAULT_VALUE = new InjectionToken<
  TemplateRef<unknown> | undefined
>('FLOWBITE_PAGINATION_NEXT_ICON_DEFAULT_VALUE');

export const FLOWBITE_PAGINATION_FIRST_ICON_DEFAULT_VALUE = new InjectionToken<
  TemplateRef<unknown> | undefined
>('FLOWBITE_PAGINATION_FIRST_ICON_DEFAULT_VALUE');

export const FLOWBITE_PAGINATION_LAST_ICON_DEFAULT_VALUE = new InjectionToken<
  TemplateRef<unknown> | undefined
>('FLOWBITE_PAGINATION_LAST_ICON_DEFAULT_VALUE');

export const FLOWBITE_PAGINATION_TABS_DEFAULT_VALUE = new InjectionToken<number>(
  'FLOWBITE_PAGINATION_TABS_DEFAULT_VALUE'
);

export const FLOWBITE_PAGINATION_PAGE_SIZE_DEFAULT_VALUE = new InjectionToken<number>(
  'FLOWBITE_PAGINATION_PAGE_SIZE_DEFAULT_VALUE'
);

export const FLOWBITE_PAGINATION_HAS_FIRST_LAST_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_PAGINATION_HAS_FIRST_LAST_DEFAULT_VALUE'
);

export const FLOWBITE_PAGINATION_HAS_PREV_NEXT_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_PAGINATION_HAS_PREV_NEXT_DEFAULT_VALUE'
);

export const FLOWBITE_PAGINATION_NAVIGATION_MODE_DEFAULT_VALUE = new InjectionToken<
  keyof PaginationNavigation
>('FLOWBITE_PAGINATION_NAVIGATION_MODE_DEFAULT_VALUE');

export const FLOWBITE_PAGINATION_SIZE_DEFAULT_VALUE = new InjectionToken<keyof PaginationSizes>(
  'FLOWBITE_PAGINATION_SIZE_DEFAULT_VALUE'
);

export const FLOWBITE_PAGINATION_BUTTON_PROPERTIES_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<ButtonProperties>
>('FLOWBITE_PAGINATION_BUTTON_PROPERTIES_DEFAULT_VALUE');

export const paginationDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_PAGINATION_CURRENT_PAGE_DEFAULT_VALUE,
    useValue: 1,
  },
  {
    provide: FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
  {
    provide: FLOWBITE_PAGINATION_PREVIOUS_ICON_DEFAULT_VALUE,
    useValue: undefined,
  },
  {
    provide: FLOWBITE_PAGINATION_NEXT_ICON_DEFAULT_VALUE,
    useValue: undefined,
  },
  {
    provide: FLOWBITE_PAGINATION_FIRST_ICON_DEFAULT_VALUE,
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
    provide: FLOWBITE_PAGINATION_HAS_FIRST_LAST_DEFAULT_VALUE,
    useValue: true,
  },
  {
    provide: FLOWBITE_PAGINATION_HAS_PREV_NEXT_DEFAULT_VALUE,
    useValue: true,
  },
  {
    provide: FLOWBITE_PAGINATION_NAVIGATION_MODE_DEFAULT_VALUE,
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
    @if (hasFirstLast()) {
      <flowbite-button
        type="button"
        data-active="false"
        (click)="goToFirstPage()"
        [color]="buttonProperties().color!"
        [fill]="buttonProperties().fill!"
        [size]="size()"
        [customStyle]="buttonProperties().customStyle!">
        @if (['icon', 'both'].includes(navigationMode())) {
          @if (firstIcon()) {
            <ng-container [ngTemplateOutlet]="firstIcon()!" />
          } @else {
            <flowbite-icon
              svgIcon="flowbite-angular:chevron-double-left"
              [class]="contentClasses().iconClass" />
          }
        }
        @if (['text', 'both'].includes(navigationMode())) {
          <span>First</span>
        }
      </flowbite-button>
    }

    @if (hasPrevNext()) {
      <flowbite-button
        type="button"
        data-active="false"
        (click)="goToPreviousPage()"
        [color]="buttonProperties().color!"
        [fill]="buttonProperties().fill!"
        [size]="size()"
        [customStyle]="buttonProperties().customStyle!">
        @if (['icon', 'both'].includes(navigationMode())) {
          @if (previousIcon()) {
            <ng-container [ngTemplateOutlet]="previousIcon()!" />
          } @else {
            <flowbite-icon
              svgIcon="flowbite-angular:chevron-left"
              [class]="contentClasses().iconClass" />
          }
        }
        @if (['text', 'both'].includes(navigationMode())) {
          <span>Previous</span>
        }
      </flowbite-button>
    }

    @for (page of visiblePages(); track $index) {
      <flowbite-button
        type="button"
        [attr.data-active]="page === currentPage()"
        (click)="goToPage(page)"
        [color]="buttonProperties().color!"
        [fill]="buttonProperties().fill!"
        [size]="size()"
        [customStyle]="buttonProperties().customStyle!">
        {{ page }}
      </flowbite-button>
    }

    @if (hasPrevNext()) {
      <flowbite-button
        type="button"
        data-active="false"
        (click)="goToNextPage()"
        [color]="buttonProperties().color!"
        [fill]="buttonProperties().fill!"
        [size]="size()"
        [customStyle]="buttonProperties().customStyle!">
        @if (['text', 'both'].includes(navigationMode())) {
          <span>Next</span>
        }
        @if (['icon', 'both'].includes(navigationMode())) {
          @if (lastIcon()) {
            <ng-container [ngTemplateOutlet]="lastIcon()!" />
          } @else {
            <flowbite-icon
              svgIcon="flowbite-angular:chevron-right"
              [class]="contentClasses().iconClass" />
          }
        }
      </flowbite-button>
    }

    @if (hasFirstLast()) {
      <flowbite-button
        type="button"
        data-active="false"
        (click)="goToLastPage()"
        [color]="buttonProperties().color!"
        [fill]="buttonProperties().fill!"
        [size]="size()"
        [customStyle]="buttonProperties().customStyle!">
        @if (['text', 'both'].includes(navigationMode())) {
          <span>Last</span>
        }
        @if (['icon', 'both'].includes(navigationMode())) {
          @if (lastIcon()) {
            <ng-container [ngTemplateOutlet]="lastIcon()!" />
          } @else {
            <flowbite-icon
              svgIcon="flowbite-angular:chevron-double-right"
              [class]="contentClasses().iconClass" />
          }
        }
      </flowbite-button>
    }
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
   * Value of the total items
   */
  public readonly totalItems = model<number>();
  /**
   * Value of the total pages
   */
  public readonly totalPages = model<number>();
  /**
   * Value of the current page
   *
   * @default 1
   */
  public readonly currentPage = model(inject(FLOWBITE_PAGINATION_CURRENT_PAGE_DEFAULT_VALUE));
  /**
   * Value of how many tabs are displayed
   *
   * @default 5
   */
  public readonly tabs = model(inject(FLOWBITE_PAGINATION_TABS_DEFAULT_VALUE));
  /**
   * Value of how many items are in a tab
   *
   * @default 25
   */
  public readonly pageSize = model(inject(FLOWBITE_PAGINATION_PAGE_SIZE_DEFAULT_VALUE));
  /**
   * Whether to show or hide previous and next buttons
   *
   * @default true
   */
  public readonly hasPrevNext = model(inject(FLOWBITE_PAGINATION_HAS_PREV_NEXT_DEFAULT_VALUE));
  /**
   * Whether to show or hide first and last buttons
   *
   * @default true
   */
  public readonly hasFirstLast = model(inject(FLOWBITE_PAGINATION_HAS_FIRST_LAST_DEFAULT_VALUE));
  /**
   * Value of the navigation button's type
   *
   * @default icon
   */
  public readonly navigationMode = model(inject(FLOWBITE_PAGINATION_NAVIGATION_MODE_DEFAULT_VALUE));
  /**
   * Value of the component's size
   *
   * @default md
   */
  public readonly size = model(inject(FLOWBITE_PAGINATION_SIZE_DEFAULT_VALUE));
  /**
   * Value of the previous icon
   *
   * @default undefined
   */
  public readonly previousIcon = model(inject(FLOWBITE_PAGINATION_PREVIOUS_ICON_DEFAULT_VALUE));
  /**
   * Value of the next icon
   *
   * @default undefined
   */
  public readonly nextIcon = model(inject(FLOWBITE_PAGINATION_NEXT_ICON_DEFAULT_VALUE));
  /**
   * Value of the first icon
   *
   * @default undefined
   */
  public readonly firstIcon = model(inject(FLOWBITE_PAGINATION_FIRST_ICON_DEFAULT_VALUE));
  /**
   * Value of the last icon
   *
   * @default undefined
   */
  public readonly lastIcon = model(inject(FLOWBITE_PAGINATION_LAST_ICON_DEFAULT_VALUE));
  /**
   * Value of the aria-label
   *
   * @default Pagination navigation
   */
  public readonly ariaLabel = model('Pagination navigation');
  /**
   * Set the custom style for this pagination
   */
  public readonly customStyle = model(inject(FLOWBITE_PAGINATION_CUSTOM_STYLE_DEFAULT_VALUE));
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
   * Value of the maximum pages. If `totalPages` is given, it will be
   * equal to that; otherwise, it is calculated from `totalItems`.
   */
  public readonly maxPages = computed(() => {
    if (this.totalPages() !== undefined) {
      /**
       * Note that if we return just `this.totalPages()`, the type of the computed
       * will be `Signal<number | undefined>`, even though there is a check.
       * So instead of that, we return `this.totalPages()!` to ensure
       * the type is always `Signal<number>`.
       */
      return this.totalPages()!;
    }

    /**
     * The same applies here, except there is no need to check for undefined,
     * because if `totalPages` is undefined, `totalItems` must have
     * a valid number value. We check it in the init function.
     */
    return Math.max(Math.ceil(this.totalItems()! / this.pageSize()), 1);
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
    if (this.totalPages() === undefined && this.totalItems() === undefined) {
      throw new Error('Either `totalPages` or `totalItems` must have a value');
    }

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-left',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_LEFT_SVG_ICON)
    );

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-double-left',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOUBLE_LEFT_SVG_ICON)
    );

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
   * Sets the value of the `currentPage` if it's between 1 and `maxPages`
   * @param page number of the active page
   */
  public goToPage(page: number) {
    if (page < 1 || page > this.maxPages()) return;
    this.currentPage.set(page);
  }

  /**
   * Decreases the value of `currentPage` if it's more than 1
   */
  public goToPreviousPage() {
    if (this.visibleCurrentPage() <= 1) return;
    this.currentPage.update((value) => value - 1);
  }

  /**
   * Increases the value of `currentPage` if it's less than `maxPages`
   */
  public goToNextPage() {
    if (this.visibleCurrentPage() >= this.maxPages()) return;
    this.currentPage.update((value) => value + 1);
  }

  /**
   * Sets the value of `currentPage` to 1
   */
  public goToFirstPage() {
    this.currentPage.set(1);
  }

  /**
   * Sets the value of `currentPage` equal to `maxPages`
   */
  public goToLastPage() {
    this.currentPage.set(this.maxPages());
  }
}
