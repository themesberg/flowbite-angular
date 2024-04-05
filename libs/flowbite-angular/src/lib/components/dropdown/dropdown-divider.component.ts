import * as properties from './dropdown-divider.theme';
import { BaseComponent } from '../base.component';
import { DropdownComponent } from './dropdown.component';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-divider',
  templateUrl: './dropdown-divider.component.html',
})
export class DropdownDividerComponent extends BaseComponent {
  @Input() customStyle: Partial<properties.DropdownDividerBaseTheme> = {};

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
