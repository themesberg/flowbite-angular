import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { BaseComponent } from '../base.component';
import type { DropdownItemClass, DropdownItemTheme } from './dropdown-item.theme';
import { DropdownItemThemeService } from './dropdown-item.theme.service';
import { DropdownComponent } from './dropdown.component';

import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-item',
  template: `<ng-content />`,
})
export class DropdownItemComponent extends BaseComponent {
  protected readonly themeService = inject(DropdownItemThemeService);
  protected readonly dropdownComponent = inject(DropdownComponent);

  public override contentClasses = signal<DropdownItemClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<DropdownItemTheme>>({});
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
