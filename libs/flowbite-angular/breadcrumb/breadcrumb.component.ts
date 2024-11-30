import { BreadcrumbItemComponent } from './breadcrumb-item.component';
import type { BreadcrumbClass, BreadcrumbColors, BreadcrumbTheme } from './breadcrumb.theme';
import { BreadcrumbThemeService } from './breadcrumb.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_BREADCRUMB_COLOR_DEFAULT_VALUE = new InjectionToken<keyof BreadcrumbColors>(
  'FLOWBITE_BREADCRUMB_COLOR_DEFAULT_VALUE'
);

export const FLOWBITE_BREADCRUMB_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<BreadcrumbTheme>
>('FLOWBITE_BREADCRUMB_CUSTOM_STYLE_DEFAULT_VALUE');

export const breadcrumbDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_BREADCRUMB_COLOR_DEFAULT_VALUE,
    useValue: 'primary',
  },
  {
    provide: FLOWBITE_BREADCRUMB_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/breadcrumb/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-breadcrumb',
  template: `<ng-content />`,
  host: {
    '[attr.aria-label]': 'breadcrumb',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent extends BaseComponent<BreadcrumbClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(BreadcrumbThemeService);
  /**
   * List of `BreadcrumbItemComponent`
   */
  public readonly breadcrumbItemChildren = contentChildren(BreadcrumbItemComponent);

  //#region properties
  /**
   * Set the breacrumb color
   *
   * @default primary
   */
  public color = model(inject(FLOWBITE_BREADCRUMB_COLOR_DEFAULT_VALUE));
  /**
   * Set the custom style for this breadcrumb
   */
  public customStyle = model(inject(FLOWBITE_BREADCRUMB_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): BreadcrumbClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.breadcrumbItemChildren().length === 0) {
      throw new Error('No BreadcrumbItemComponent available');
    }
  }
  //#endregion
}
