import * as properties from './dropdown-header.theme';
import { BaseComponent } from '../base.component';
import { DropdownComponent } from './dropdown.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-header',
  templateUrl: './dropdown-header.component.html',
})
export class DropdownHeaderComponent extends BaseComponent {
  protected dropdownComponent = inject<DropdownComponent>(DropdownComponent);

  protected override contentClasses = signal<properties.DropdownHeaderClass>(
    properties.DropdownHeaderClassInstance(),
  );
  //#region properties
  public customStyle = input<Partial<properties.DropdownHeaderBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.customStyle())) {
      const propertyClass = properties.getClasses({
        customStyle: this.customStyle(),
      });

      this.contentClasses.set(propertyClass);
    }
  }
  //#endregion
}
