import type { DeepPartial } from '../../common/flowbite.type';
import { NavbarStateService } from '../../services';
import { createClass } from '../../utils';
import { routerLinkInputs } from '../../utils/directive.input.util';
import { BaseComponent } from '../base-component.directive';
import type { NavbarItemClass, NavbarItemColors, NavbarItemTheme } from './navbar-item.theme';
import { NavbarItemThemeService } from './navbar-item.theme.service';

import { NgClass } from '@angular/common';
import { Component, HostListener, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'flowbite-navbar-item',
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
export class NavbarItemComponent extends BaseComponent {
  public readonly themeService = inject(NavbarItemThemeService);
  public readonly navbarStateService = inject(NavbarStateService);

  public override contentClasses = signal<NavbarItemClass>(createClass({ rootClass: '' }));

  //#region properties
  public color = input<keyof NavbarItemColors>('blue');
  public customStyle = input<DeepPartial<NavbarItemTheme>>({});
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
  }
}
