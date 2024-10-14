import type { DeepPartial } from '../../common/flowbite.type';
import { FlowbiteRouterLinkDirective } from '../../directives/flowbite-router-link.directive';
import { BaseComponent } from '../base-component.directive';
import type { NavbarBrandClass, NavbarBrandTheme } from './navbar-brand.theme';
import { NavbarBrandThemeService } from './navbar-brand.theme.service';
import { NavbarComponent } from './navbar.component';

import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'flowbite-navbar-brand',
  standalone: true,
  imports: [NgClass],
  template: `<ng-content />`,
  hostDirectives: [
    {
      directive: FlowbiteRouterLinkDirective,
      inputs: FlowbiteRouterLinkDirective.flowbiteRouterLinkInputs,
      outputs: FlowbiteRouterLinkDirective.flowbiteRouterLinkOutputs,
    },
  ],
})
export class NavbarBrandComponent extends BaseComponent<NavbarBrandClass> {
  public readonly themeService = inject(NavbarBrandThemeService);
  public readonly navbarComponent = inject(NavbarComponent);

  //#region properties
  public customStyle = input<DeepPartial<NavbarBrandTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarBrandClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
