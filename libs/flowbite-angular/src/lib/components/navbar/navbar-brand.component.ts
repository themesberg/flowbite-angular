import type { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
import { RoutableDirective } from '../../directives';
import { BaseComponent } from '../base.component';
import * as properties from './navbar-brand.theme';
import { NavbarBrandThemeService } from './navbar-brand.theme.service';

import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  selector: 'flowbite-navbar-brand',
  standalone: true,
  imports: [NgClass],
  template: `<ng-content />`,
  hostDirectives: [
    {
      directive: RoutableDirective,
      inputs: ['href'],
    },
  ],
})
export class NavbarBrandComponent extends BaseComponent {
  protected readonly themeService = inject(NavbarBrandThemeService);

  public override contentClasses = signal<properties.NavbarBrandClass>(properties.NavbarBrandClassInstance);

  //#region properties
  public customStyle = input<DeepPartial<properties.NavbarBrandBaseTheme>>({});
  public link = input<FlowbiteLink | undefined>(undefined);
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
