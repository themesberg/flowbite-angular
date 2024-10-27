import type { DropdownItemClass, DropdownItemTheme } from './dropdown-item.theme';
import { DropdownItemThemeService } from './dropdown-item.theme.service';
import { DropdownComponent } from './dropdown.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import { Component, inject, model } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-item',
  template: `<ng-content />`,
})
export class DropdownItemComponent extends BaseComponent<DropdownItemClass> {
  public readonly themeService = inject(DropdownItemThemeService);
  public readonly dropdownComponent = inject(DropdownComponent);

  //#region properties
  public customStyle = model<DeepPartial<DropdownItemTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): DropdownItemClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
