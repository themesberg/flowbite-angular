import * as properties from './dropdown-header.theme';
import { BaseComponent } from '../base.component';
import { DropdownComponent } from './dropdown.component';
import { DropdownHeaderThemeService } from './dropdown-header.theme.service';

import { Component, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-header',
  templateUrl: './dropdown-header.component.html',
})
export class DropdownHeaderComponent extends BaseComponent {
  protected override contentClasses = signal<properties.DropdownHeaderClass>(
    properties.DropdownHeaderClassInstance,
  );

  protected readonly themeService = inject(DropdownHeaderThemeService);
  protected readonly dropdownComponent =
    inject<DropdownComponent>(DropdownComponent);

  //#region properties
  public customStyle = input<Partial<properties.DropdownHeaderBaseTheme>>({});
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
