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
  protected themeService = inject(DropdownDividerThemeService);
  protected dropdownComponent = inject<DropdownComponent>(DropdownComponent);

  protected override contentClasses = signal<properties.DropdownDividerClass>(
    properties.DropdownDividerClassInstance,
  );

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
