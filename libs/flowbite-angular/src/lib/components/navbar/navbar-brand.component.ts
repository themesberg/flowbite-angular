import * as properties from './navbar-brand.theme';

import { BaseComponent } from '../base.component';
import { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
import { LinkRouter } from '../../services';
import { NavbarBrandThemeService } from './navbar-brand.theme.service';

import { Component, HostListener, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flowbite-navbar-brand',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-brand.component.html',
})
export class NavbarBrandComponent extends BaseComponent {
  protected override contentClasses = signal<properties.NavbarBrandClass>(
    properties.NavbarBrandClassInstance,
  );

  protected readonly themeService = inject(NavbarBrandThemeService);
  protected readonly linkRouter = inject(LinkRouter);

  //#region properties
  public customStyle = input<DeepPartial<properties.NavbarBrandBaseTheme>>({});
  public link = input<FlowbiteLink | undefined>(undefined);
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
  protected async onClick(): Promise<void> {
    await this.linkRouter.navigate(this.link());
  }
}
