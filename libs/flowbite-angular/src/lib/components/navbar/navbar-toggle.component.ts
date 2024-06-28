import type { DeepPartial } from '../../common';
import { NavbarStateService } from '../../services';
import { BaseComponent } from '../base.component';
import * as properties from './navbar-toggle.theme';
import { NavbarToggleThemeService } from './navbar-toggle.theme.service';

import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, input, signal } from '@angular/core';

@Component({
  selector: 'flowbite-navbar-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-toggle.component.html',
})
export class NavbarToggleComponent extends BaseComponent {
  protected override contentClasses = signal<properties.NavbarToggleClass>(properties.NavbarToggleClassInstance);

  protected readonly themeService = inject(NavbarToggleThemeService);
  protected readonly navbarStateService = inject<NavbarStateService>(NavbarStateService);

  //#region properties
  public customStyle = input<DeepPartial<properties.NavbarToggleBaseTheme>>({});
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
    const isCollapsed = this.navbarStateService.select('isOpen')();

    this.navbarStateService.set('isOpen', !isCollapsed);
  }
}
