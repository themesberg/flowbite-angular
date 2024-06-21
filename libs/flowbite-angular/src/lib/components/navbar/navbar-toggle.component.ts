import * as properties from './navbar-toggle.theme';

import { BaseComponent } from '../base.component';

import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, input, signal } from '@angular/core';
import { NavbarState, SignalStoreService } from '../../services';
import { NavbarToggleThemeService } from './navbar-toggle.theme.service';

@Component({
  selector: 'flowbite-navbar-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-toggle.component.html',
})
export class NavbarToggleComponent extends BaseComponent {
  protected readonly themeService = inject(NavbarToggleThemeService);
  protected readonly navbarService = inject<SignalStoreService<NavbarState>>(
    SignalStoreService<NavbarState>,
  );

  protected override contentClasses = signal<properties.NavbarToggleClass>(
    properties.NavbarToggleClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.NavbarToggleBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    const isCollapsed = this.navbarService.select('isCollapsed')();

    this.navbarService.set('isCollapsed', !isCollapsed);
  }
}
