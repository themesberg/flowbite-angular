import * as properties from './button.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';

import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent extends BaseComponent implements OnInit {
  @Input() color: keyof properties.ButtonColors = 'info';
  @Input() gradientMonochrome?: keyof properties.ButtonMonochromeColors;
  @Input() gradientDuoTone?: keyof properties.ButtonDuoToneColors;
  @Input() size: keyof properties.ButtonSizes = 'md';
  @Input() pill: keyof FlowbiteBoolean = 'disabled';
  @Input() outline: keyof properties.ButtonFill = 'solid';
  @Input() disabled: keyof FlowbiteBoolean = 'disabled';
  @Input() customStyle: Partial<properties.ButtonBaseTheme> = {};

  ngOnInit() {
    const t = properties.getClasses({
      color: this.color,
      disabled: this.disabled,
      outline: this.outline,
      pill: this.pill,
      size: this.size,
      gradientDuoTone: this.gradientDuoTone,
      gradientMonochrome: this.gradientMonochrome,
      customStyle: this.customStyle,
    });

    this.componentClass = t.buttonClass;
    this.contentClasses = {
      span: t.spanClass,
    };
  }
}
