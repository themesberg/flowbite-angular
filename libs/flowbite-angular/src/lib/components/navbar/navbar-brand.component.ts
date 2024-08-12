import type { DeepPartial } from '../../common/flowbite.type';
import { createClass } from '../../utils';
import { routerLinkInputs } from '../../utils/directive.input.util';
import { BaseComponent } from '../base.component';
import type { NavbarBrandClass, NavbarBrandTheme } from './navbar-brand.theme';
import { NavbarBrandThemeService } from './navbar-brand.theme.service';

import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'flowbite-navbar-brand',
  standalone: true,
  imports: [NgClass],
  template: `<ng-content />`,
  hostDirectives: [
    {
      directive: RouterLink,
      inputs: routerLinkInputs,
    },
  ],
})
export class NavbarBrandComponent extends BaseComponent {
  protected readonly themeService = inject(NavbarBrandThemeService);

  public override contentClasses = signal<NavbarBrandClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<NavbarBrandTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
