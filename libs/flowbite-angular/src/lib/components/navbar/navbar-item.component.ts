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
  template: `<ng-content />`,
})
export class NavbarItemComponent extends BaseComponent {
  protected readonly themeService = inject(NavbarItemThemeService);
  protected readonly navbarStateService = inject(NavbarStateService);
  public readonly flowbiteLinkRouter = inject(FlowbiteLinkRouter);

  public override contentClasses = signal<properties.NavbarItemClass>(properties.NavbarItemClassInstance);

  //#region properties
  public color = input<keyof properties.NavbarItemColors>('blue');
  public customStyle = input<DeepPartial<properties.NavbarItemBaseTheme>>({});
  public link = input<FlowbiteLink | undefined>(undefined);
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  public onClick(): void {
    this.navbarStateService.set('isOpen', false);

    this.flowbiteLinkRouter.navigate(this.link());
  }
}
