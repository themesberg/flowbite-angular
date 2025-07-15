import type { DeepPartial } from '../../common';
import { BaseComponent } from '../base-component.directive';
import { NavbarContentComponent } from './navbar-content.component';
import type { NavbarIconButtonClass, NavbarIconButtonTheme } from './navbar-icon-button.theme';
import { NavbarIconButtonThemeService } from './navbar-icon-button.theme.service';
import { NavbarComponent } from './navbar.component';
import type { NavbarColors } from './navbar.theme';

import { Component, inject, model } from '@angular/core';

@Component({
  selector: 'flowbite-navbar-icon-button',
  standalone: true,
  imports: [],
  template: `<ng-content />`,
})
export class NavbarIconButtonComponent extends BaseComponent<NavbarIconButtonClass> {
  public readonly themeService = inject(NavbarIconButtonThemeService);
  public readonly navbarComponent = inject(NavbarComponent, { optional: true });
  public readonly navbarContentComponent = inject(NavbarContentComponent, { optional: true });

  //#region properties
  public color = model<keyof NavbarColors>(this.navbarContentComponent?.color() || this.navbarComponent!.color());
  public customStyle = model<DeepPartial<NavbarIconButtonTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarIconButtonClass {
    return this.themeService.getClasses({
      color: this.color(),
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.navbarComponent === null && this.navbarContentComponent === null) {
      throw new Error('No NavbarComponent/NavbarContentComponent available');
    }
  }
}
