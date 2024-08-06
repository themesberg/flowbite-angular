import { BaseComponent } from '../base.component';
import * as properties from './dropdown-header.theme';
import { DropdownHeaderThemeService } from './dropdown-header.theme.service';
import { DropdownComponent } from './dropdown.component';

import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-header',
  templateUrl: './dropdown-header.component.html',
})
export class DropdownHeaderComponent extends BaseComponent {
  public readonly themeService = inject(DropdownHeaderThemeService);
  public readonly dropdownComponent = inject<DropdownComponent>(DropdownComponent);

  public override contentClasses = signal<properties.DropdownHeaderClass>(properties.DropdownHeaderClassInstance);

  //#region properties
  public customStyle = input<Partial<properties.DropdownHeaderBaseTheme>>({});
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
