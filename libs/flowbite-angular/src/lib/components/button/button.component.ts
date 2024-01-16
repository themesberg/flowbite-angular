import {
  ButtonColors,
  ButtonDuoToneColors,
  ButtonMonochromeColors,
  ButtonSizes,
  buttonBaseClass,
  buttonColorClasses,
  buttonDisableClasses,
  buttonDuoToneColorClasses,
  buttonMonochromeColorClasses,
  buttonPillClasses,
  buttonSizeClasses,
  spanBaseClass,
} from './button.properties';
import { Component, Input, OnInit } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  selector: 'flowbite-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() color: ButtonColors = 'info';
  @Input() gradientMonochrome?: ButtonMonochromeColors;
  @Input() gradientDuoTone?: ButtonDuoToneColors;
  @Input() size: ButtonSizes = 'md';
  @Input() pill = false;
  @Input() outline = false;
  @Input() disabled = false;

  buttonClass = '';
  spanClass = spanBaseClass;

  ngOnInit() {
    if (this.gradientDuoTone && this.outline) {
      this.buttonClass = buttonBaseClass['span'];
      this.buttonClass +=
        buttonDuoToneColorClasses[this.gradientDuoTone][
          this.outline ? 'outline' : 'solid'
        ];

      this.spanClass += this.pill ? buttonPillClasses['true'] : ' rounded-md';
      this.spanClass += buttonSizeClasses[this.size];
    } else {
      this.buttonClass = buttonBaseClass['default'];

      if (this.gradientDuoTone) {
        this.buttonClass +=
          buttonDuoToneColorClasses[this.gradientDuoTone]['solid'];
      } else if (this.gradientMonochrome) {
        this.buttonClass +=
          buttonMonochromeColorClasses[this.gradientMonochrome];
      } else {
        this.buttonClass +=
          buttonColorClasses[this.color][this.outline ? 'outline' : 'solid'];
      }
      this.buttonClass += buttonSizeClasses[this.size];
    }

    this.buttonClass += buttonPillClasses[String(this.pill)];
    this.buttonClass += buttonDisableClasses[String(this.disabled)];
  }
}
