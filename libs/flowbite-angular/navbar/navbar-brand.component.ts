import type { NavbarBrandClass, NavbarBrandTheme } from './navbar-brand.theme';
import { NavbarBrandThemeService } from './navbar-brand.theme.service';
import { NavbarComponent } from './navbar.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_NAVBAR_BRAND_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<NavbarBrandTheme>
>('FLOWBITE_NAVBAR_BRAND_CUSTOM_STYLE_DEFAULT_VALUE');

export const navbarBrandDefaultThemeProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_NAVBAR_BRAND_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/navbar/
 */
@Component({
  standalone: true,
  selector: 'flowbite-navbar-brand',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarBrandComponent extends BaseComponent<NavbarBrandClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(NavbarBrandThemeService);
  /**
   * The parent `NavbarComponent`
   */
  public readonly navbarComponent = inject(NavbarComponent);

  //#region properties
  /**
   * Set the custom style for this navbar brand
   */
  public customStyle = model(inject(FLOWBITE_NAVBAR_BRAND_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarBrandClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
