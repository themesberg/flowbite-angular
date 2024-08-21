import type { DeepPartial } from '../../common/flowbite.type';
import { FlowbiteRouterLinkActiveDirective } from '../../directives/flowbite-router-link-active.directive';
import { createClass } from '../../utils';
import { routerLinkInputs } from '../../utils/directive.input.util';
import { routerLinkOutputs } from '../../utils/directive.output.util';
import { BaseComponent } from '../base-component.directive';
import { NavbarContentComponent } from './navbar-content.component';
import type { NavbarItemClass, NavbarItemTheme } from './navbar-item.theme';
import { NavbarItemThemeService } from './navbar-item.theme.service';
import type { NavbarColors } from './navbar.theme';

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
      outputs: routerLinkOutputs,
    },
    {
      directive: FlowbiteRouterLinkActiveDirective,
    },
  ],
})
export class NavbarItemComponent extends BaseComponent {
  public readonly routerLink = inject(RouterLink);
  public readonly flowbiteRouterLinkActive = inject(FlowbiteRouterLinkActiveDirective);
  public readonly themeService = inject(NavbarItemThemeService);
  public readonly navbarContentComponent = inject(NavbarContentComponent);

  public override contentClasses = signal<NavbarItemClass>(createClass({ rootClass: '' }));

  //#region properties
  public color = input<keyof NavbarColors>(this.navbarContentComponent.color());
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
    this.navbarContentComponent.navbarComponent.toggleVisibility(false);
  }
}
