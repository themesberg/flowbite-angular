import * as properties from './dropdown-divider.theme';
import { BaseComponent } from '../base.component';
import { DropdownComponent } from './dropdown.component';

import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-divider',
  templateUrl: './dropdown-divider.component.html',
})
export class DropdownDividerComponent extends BaseComponent implements OnInit {
  @Input() customStyle: Partial<properties.DropdownDividerBaseTheme> = {};

  constructor(readonly dropdown: DropdownComponent) {
    super();
  }

  ngOnInit(): void {
    const propertyClass = properties.getClasses({
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
