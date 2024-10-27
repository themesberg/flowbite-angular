import type { DeepPartial } from '../../common/type-definitions/flowbite.deep-partial';
import { BaseComponent } from '../base-component.directive';
import type { NavbarBrandClass, NavbarBrandTheme } from './navbar-brand.theme';
import { NavbarBrandThemeService } from './navbar-brand.theme.service';
import { NavbarComponent } from './navbar.component';

import { NgClass } from '@angular/common';
import { Component, inject, model } from '@angular/core';

@Component({
  selector: 'flowbite-navbar-brand',
  standalone: true,
  imports: [NgClass],
  template: `<ng-content />`,
})
export class NavbarBrandComponent extends BaseComponent<NavbarBrandClass> {
  public readonly themeService = inject(NavbarBrandThemeService);
  public readonly navbarComponent = inject(NavbarComponent);

  //#region properties
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
