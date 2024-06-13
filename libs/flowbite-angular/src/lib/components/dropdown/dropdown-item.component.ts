import * as properties from './dropdown-item.theme';

import { BaseComponent } from '../base.component';
import { DropdownComponent } from './dropdown.component';
import { DropdownItemThemeService } from './dropdown-item.theme.service';

import { Component, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-item',
  templateUrl: './dropdown-item.component.html',
})
export class DropdownItemComponent extends BaseComponent {
  protected themeService = inject(DropdownItemThemeService);
  protected dropdownComponent = inject<DropdownComponent>(DropdownComponent);

  protected override contentClasses = signal<properties.DropdownItemClass>(
    properties.DropdownItemClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.DropdownItemBaseTheme>>({});
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
