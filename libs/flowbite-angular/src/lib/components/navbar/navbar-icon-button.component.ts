import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { BaseComponent } from '../base-component.directive';
import { NavbarContentComponent } from './navbar-content.component';
import type { NavbarIconButtonClass, NavbarIconButtonTheme } from './navbar-icon-button.theme';
import { NavbarIconButtonThemeService } from './navbar-icon-button.theme.service';
import { NavbarComponent } from './navbar.component';
import type { NavbarColors } from './navbar.theme';

import { Component, inject, input, signal } from '@angular/core';

@Component({
  selector: 'flowbite-navbar-icon-button',
  standalone: true,
  imports: [],
  template: `<ng-content />`,
})
export class NavbarIconButtonComponent extends BaseComponent {
  public readonly themeService = inject(NavbarIconButtonThemeService);
  public readonly navbarComponent = inject(NavbarComponent, { optional: true });
  public readonly navbarContentComponent = inject(NavbarContentComponent, { optional: true });

  public override contentClasses = signal<NavbarIconButtonClass>(createClass({ rootClass: '' }));

  //#region properties
  public color = input<keyof NavbarColors>(this.navbarContentComponent?.color() || this.navbarComponent!.color());
  public customStyle = input<DeepPartial<NavbarIconButtonTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override verify(): void {
    if (this.navbarComponent === null && this.navbarContentComponent === null) {
      throw new Error('No NavbarComponent/NavbarContentComponent available');
    }
  }
}
