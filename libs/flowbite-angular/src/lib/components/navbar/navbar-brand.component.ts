import * as properties from './navbar-brand.theme';

import { BaseComponent } from '../base.component';
import { NavbarBrandThemeService } from './navbar-brand.theme.service';

import { Component, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flowbite-navbar-brand',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-brand.component.html',
})
export class NavbarBrandComponent extends BaseComponent {
  protected themeService = inject(NavbarBrandThemeService);
  protected override contentClasses = signal<properties.NavbarBrandClass>(
    properties.NavbarBrandClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.NavbarBrandBaseTheme>>({});
  public href = input<string | undefined>(undefined);
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
