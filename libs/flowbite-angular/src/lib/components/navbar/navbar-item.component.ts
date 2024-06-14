import * as properties from './navbar-item.theme';

import { BaseComponent } from '../base.component';
import { NavbarItemThemeService } from './navbar-item.theme.service';
import { NavbarState, SignalStoreService } from '../../services';

import { Component, HostListener, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flowbite-navbar-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-item.component.html',
})
export class NavbarItemComponent extends BaseComponent {
  protected themeService = inject(NavbarItemThemeService);
  protected navbarService = inject<SignalStoreService<NavbarState>>(
    SignalStoreService<NavbarState>,
  );

  protected override contentClasses = signal<properties.NavbarItemClass>(
    properties.NavbarItemClassInstance,
  );

  //#region properties
  public color = input<keyof properties.NavbarItemColors>('blue');
  public customStyle = input<Partial<properties.NavbarItemBaseTheme>>({});
  public href = input<string | undefined>(undefined);
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    this.navbarService.set('isCollapsed', false);
  }
}
