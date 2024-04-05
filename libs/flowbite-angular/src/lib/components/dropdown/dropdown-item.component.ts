import * as properties from './dropdown-item.theme';
import { BaseComponent } from '../base.component';
import { DropdownComponent } from './dropdown.component';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-item',
  templateUrl: './dropdown-item.component.html',
})
export class DropdownItemComponent extends BaseComponent {
  @Input() customStyle: Partial<properties.DropdownItemBaseTheme> = {};

  constructor(readonly dropdown: DropdownComponent) {
    super();
  }

  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
