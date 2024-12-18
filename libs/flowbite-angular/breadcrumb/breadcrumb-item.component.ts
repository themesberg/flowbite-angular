import type { BreadcrumbItemClass, BreadcrumbItemTheme } from './breadcrumb-item.theme';
import { BreadcrumbItemThemeService } from './breadcrumb-item.theme.service';
import { BreadcrumbComponent } from './breadcrumb.component';
import type { BreadcrumbColors } from './breadcrumb.theme';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';
import { CHEVRON_RIGHT_SVG_ICON } from 'flowbite-angular/utils';

import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export const FLOWBITE_BREADCRUMB_ITEM_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<BreadcrumbItemTheme>
>('FLOWBITE_BREADCRUMB_ITEM_CUSTOM_STYLE_DEFAULT_VALUE');

export const breadcrumbItemDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_BREADCRUMB_ITEM_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/breadcrumb/
 */
@Component({
  imports: [IconComponent],
  selector: 'flowbite-breadcrumb-item',
  template: `
    <flowbite-icon
      [class]="contentClasses().breadcrumbIconClass"
      svgIcon="flowbite-angular:chevron-right" />
    <ng-content />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbItemComponent extends BaseComponent<BreadcrumbItemClass> implements OnInit {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(BreadcrumbItemThemeService);
  /**
   * The parent `BreadcrumbComponent`
   */
  public readonly breadcrumbComponent = inject(BreadcrumbComponent);
  /**
   * Optional `FlowbiteRouterLinkDirective` injected
   */
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective, { optional: true });
  /**
   * `IconRegistry` service
   */
  public readonly iconRegistry = inject(IconRegistry);
  /**
   * `DomSanitizer` service
   */
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  /**
   * Set the breadcrumb item color
   *
   * @default `BreadcrumbComponent`'s color
   */
  public color = model<keyof BreadcrumbColors>(this.breadcrumbComponent.color());
  /**
   * Set the custom style for this breadcrumb item
   */
  public customStyle = model(inject(FLOWBITE_BREADCRUMB_ITEM_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): BreadcrumbItemClass {
    return this.themeService.getClasses({
      color: this.color(),
      link: this.flowbiteRouterLink?.routerLink.urlTree ?? null,
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-right',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_RIGHT_SVG_ICON)
    );
  }
  //#endregion
}
