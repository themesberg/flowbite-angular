import * as properties from './navbar.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';

import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent extends BaseComponent implements OnInit {
  @Input() rounded: keyof FlowbiteBoolean = 'disabled';
  @Input() border: keyof FlowbiteBoolean = 'disabled';
  @Input() fluid: keyof FlowbiteBoolean = 'disabled';
  @Input() customStyle: Partial<properties.NavbarBaseTheme> = {};

  ngOnInit(): void {
    const propertyClass = properties.getClasses({
      border: this.border,
      fluid: this.fluid,
      rounded: this.rounded,
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.navbarClass;
    this.contentClasses = {
      content: propertyClass.contentClass,
    };
  }
}
