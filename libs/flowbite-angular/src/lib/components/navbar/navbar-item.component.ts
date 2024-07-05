import type { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
import { FlowbiteLinkRouter, NavbarStateService } from '../../services';
import { BaseComponent } from '../base.component';
import * as properties from './navbar-item.theme';
import { NavbarItemThemeService } from './navbar-item.theme.service';

import { NgClass } from '@angular/common';
import { Component, HostListener, inject, input, signal } from '@angular/core';

@Component({
  selector: 'flowbite-navbar-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-item.component.html',
})
export class NavbarItemComponent extends BaseComponent {
  protected override contentClasses = signal<properties.NavbarItemClass>(properties.NavbarItemClassInstance);

  protected readonly themeService = inject(NavbarItemThemeService);
  protected readonly navbarStateService = inject<NavbarStateService>(NavbarStateService);
  protected readonly flowbiteLinkRouter = inject(FlowbiteLinkRouter);

  //#region properties
  public color = input<keyof properties.NavbarItemColors>('blue');
  public customStyle = input<DeepPartial<properties.NavbarItemBaseTheme>>({});
  public link = input<FlowbiteLink | undefined>(undefined);
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
    this.navbarStateService.set('isOpen', false);

    this.flowbiteLinkRouter.navigate(this.link());
  }
}
