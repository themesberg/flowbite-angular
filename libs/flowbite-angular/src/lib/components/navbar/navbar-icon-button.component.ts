import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { BaseComponent } from '../base-component.directive';
import type { NavbarIconButtonClass, NavbarIconButtonTheme } from './navbar-icon-button.theme';
import { NavbarIconButtonThemeService } from './navbar-icon-button.theme.service';

import { Component, inject, input, signal } from '@angular/core';

@Component({
  selector: 'flowbite-navbar-icon-button',
  standalone: true,
  imports: [],
  template: `<ng-content />`,
})
export class NavbarIconButtonComponent extends BaseComponent {
  public readonly themeService = inject(NavbarIconButtonThemeService);

  public override contentClasses = signal<NavbarIconButtonClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<NavbarIconButtonTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
}
