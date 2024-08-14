import { createClass } from '../../utils';
import { BaseComponent } from '../base-component.directive';
import type { DropdownDividerClass, DropdownDividerTheme } from './dropdown-divider.theme';
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
  public readonly themeService = inject(DropdownDividerThemeService);
  public readonly dropdownComponent = inject(DropdownComponent);

  public override contentClasses = signal<DropdownDividerClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<Partial<DropdownDividerTheme>>({});
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
