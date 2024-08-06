import type { DeepPartial } from '../../common';
import { BaseComponent } from '../base.component';
import * as properties from './dropdown-item.theme';
import { DropdownItemThemeService } from './dropdown-item.theme.service';
import { DropdownComponent } from './dropdown.component';

import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-item',
  templateUrl: './dropdown-item.component.html',
})
export class DropdownItemComponent extends BaseComponent {
  public readonly themeService = inject(DropdownItemThemeService);
  public readonly dropdownComponent = inject<DropdownComponent>(DropdownComponent);

  public override contentClasses = signal<properties.DropdownItemClass>(properties.DropdownItemClassInstance);

  //#region properties
  public customStyle = input<DeepPartial<properties.DropdownItemBaseTheme>>({});
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
