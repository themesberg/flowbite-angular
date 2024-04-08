import * as properties from './dropdown-item.theme';
import { BaseComponent } from '../base.component';
import { DropdownComponent } from './dropdown.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-item',
  templateUrl: './dropdown-item.component.html',
})
export class DropdownItemComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.DropdownItemClass,
    string
  >;
  //#region properties
  protected $customStyle: Partial<properties.DropdownItemBaseTheme> = {};
  //#endregion
  //#region getter/setter
  /** @default {} */
  public get customStyle(): Partial<properties.DropdownItemBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.DropdownItemBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  constructor(readonly dropdown: DropdownComponent) {
    super();
  }

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.$customStyle)) {
      const propertyClass = properties.getClasses({
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion
}
