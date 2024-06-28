import * as properties from './navbar-item.theme';

import { BaseComponent } from '../base.component';
import { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
import { LinkRouter, NavbarStateService } from '../../services';
import { NavbarItemThemeService } from './navbar-item.theme.service';

import { Component, HostListener, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flowbite-navbar-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-item.component.html',
})
export class NavbarItemComponent extends BaseComponent {
  protected override contentClasses = signal<properties.NavbarItemClass>(
    properties.NavbarItemClassInstance,
  );

  protected readonly themeService = inject(NavbarItemThemeService);
  protected readonly navbarStateService =
    inject<NavbarStateService>(NavbarStateService);
  protected readonly linkRouter = inject(LinkRouter);

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

    this.linkRouter.navigate(this.link());
  }
}
