import * as properties from './dropdown-header.theme';
import { BaseComponent } from '../base.component';
import { DropdownComponent } from './dropdown.component';

import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown-header',
  templateUrl: './dropdown-header.component.html',
})
export class DropdownHeaderComponent extends BaseComponent implements OnInit {
  @Input() customStyle: Partial<properties.DropdownHeaderBaseTheme> = {};

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
