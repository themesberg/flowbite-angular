import * as properties from './sidebar-item-group.theme';

import { BaseComponent } from '../base.component';
import { SidebarItemGroupThemeService } from './sidebar-item-group.theme.service';

import { Component, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-sidebar-item-group',
  templateUrl: './sidebar-item-group.component.html',
})
export class SidebarItemGroupComponent extends BaseComponent {
  protected readonly themeService = inject(SidebarItemGroupThemeService);

  protected override contentClasses = signal<properties.SidebarItemGroupClass>(
    properties.SidebarItemGroupClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.SidebarItemGroupBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
