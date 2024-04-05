import * as properties from './accordion.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';

import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion',
  templateUrl: './accordion.component.html',
})
export class AccordionComponent extends BaseComponent implements OnInit {
  @Input() flush: keyof FlowbiteBoolean = 'disabled';
  @Input() customStyle: Partial<properties.AccordionBaseTheme> = {};

  ngOnInit(): void {
    const propertyClass = properties.getClasses({
      flush: this.flush,
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
