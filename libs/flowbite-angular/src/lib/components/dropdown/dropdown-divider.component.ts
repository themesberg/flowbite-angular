import { BaseComponent } from '../base.component';
import * as properties from './dropdown-divider.theme';
import { DropdownDividerThemeService } from './dropdown-divider.theme.service';
import { DropdownComponent } from './dropdown.component';

import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-divider',
  template: ``,
})
export class DropdownDividerComponent extends BaseComponent {
  protected readonly themeService = inject(DropdownDividerThemeService);
  protected readonly dropdownComponent = inject(DropdownComponent);

  public override contentClasses = signal<properties.DropdownDividerClass>(properties.DropdownDividerClassInstance);

  //#region properties
  public customStyle = input<Partial<properties.DropdownDividerBaseTheme>>({});
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
