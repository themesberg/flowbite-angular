import type { NavbarBrandClass, NavbarBrandTheme } from './navbar-brand.theme';
import { NavbarBrandThemeService } from './navbar-brand.theme.service';
import { NavbarComponent } from './navbar.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/navbar/
 */
@Component({
  selector: 'flowbite-navbar-brand',
  standalone: true,
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
  public customStyle = model<DeepPartial<NavbarBrandTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarBrandClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
