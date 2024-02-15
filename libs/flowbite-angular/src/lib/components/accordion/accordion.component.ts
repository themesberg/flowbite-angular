import * as properties from './theme';
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
    this.componentClass = properties.getClasses({
      flush: this.flush,
      customStyle: this.customStyle,
    });
  }
}
