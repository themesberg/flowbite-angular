import * as properties from './dropdown-divider.theme';
import { BaseComponent } from '../base.component';
import { DropdownComponent } from './dropdown.component';
import { DropdownDividerThemeService } from './dropdown-divider.theme.service';

import { Component, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-divider',
  templateUrl: './dropdown-divider.component.html',
})
export class DropdownDividerComponent extends BaseComponent {
  protected override contentClasses = signal<properties.DropdownDividerClass>(
    properties.DropdownDividerClassInstance,
  );

  protected readonly themeService = inject(DropdownDividerThemeService);
  protected readonly dropdownComponent =
    inject<DropdownComponent>(DropdownComponent);

  //#region properties
  public customStyle = input<Partial<properties.DropdownDividerBaseTheme>>({});
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
