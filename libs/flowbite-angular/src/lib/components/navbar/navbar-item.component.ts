import type { DeepPartial } from '../../common/flowbite.type';
import { FlowbiteRouterLinkActiveDirective } from '../../directives/flowbite-router-link-active.directive';
import { FlowbiteRouterLinkDirective } from '../../directives/flowbite-router-link.directive';
import { BaseComponent } from '../base-component.directive';
import { NavbarContentComponent } from './navbar-content.component';
import type { NavbarItemClass, NavbarItemTheme } from './navbar-item.theme';
import { NavbarItemThemeService } from './navbar-item.theme.service';
import type { NavbarColors } from './navbar.theme';

import { NgClass } from '@angular/common';
import { Component, HostListener, inject, input } from '@angular/core';

@Component({
  selector: 'flowbite-navbar-item',
  standalone: true,
  imports: [NgClass],
  template: `<ng-content />`,
  hostDirectives: [
    {
      directive: FlowbiteRouterLinkDirective,
      inputs: FlowbiteRouterLinkDirective.flowbiteRouterLinkInputs,
      outputs: FlowbiteRouterLinkDirective.flowbiteRouterLinkOutputs,
    },
    {
      directive: FlowbiteRouterLinkActiveDirective,
    },
  ],
})
export class NavbarItemComponent extends BaseComponent<NavbarItemClass> {
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective);
  public readonly flowbiteRouterLinkActive = inject(FlowbiteRouterLinkActiveDirective);
  public readonly themeService = inject(NavbarItemThemeService);
  public readonly navbarContentComponent = inject(NavbarContentComponent);

  //#region properties
  public color = input<keyof NavbarColors>(this.navbarContentComponent.color());
  public customStyle = input<DeepPartial<NavbarItemTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarItemClass {
    return this.themeService.getClasses({
      color: this.color(),
      customStyle: this.customStyle(),
    });
  }
  //#endregion

  @HostListener('click')
  public onClick(): void {
    this.navbarContentComponent.navbarComponent.toggleVisibility(false);
  }
}
