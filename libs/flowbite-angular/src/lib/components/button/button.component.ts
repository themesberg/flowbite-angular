import { Component, Input, OnInit } from '@angular/core';
import {
  buttonBaseClass,
  buttonColorClasses,
  ButtonColors,
  buttonDisableClasses,
  buttonDuoToneColorClasses,
  ButtonDuoToneColors,
  buttonMonochromeColorClasses,
  ButtonMonochromeColors,
  buttonPillClasses,
  buttonSizeClasses,
  ButtonSizes,
} from './button.properties';

@Component({
  selector: 'flowbite-button',
  template: `
    <button type="button" [class]="buttonClass" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent implements OnInit {
  @Input() color: ButtonColors = 'info';
  @Input() gradientMonochrome?: ButtonMonochromeColors;
  @Input() gradientDuoTone?: ButtonDuoToneColors;
  @Input() size: ButtonSizes = 'md';
  @Input() pill = false;
  @Input() outline = false;
  @Input() disabled = false;

  buttonClass = buttonBaseClass;

  ngOnInit() {
    if (this.gradientDuoTone) {
      this.buttonClass +=
        buttonDuoToneColorClasses[this.gradientDuoTone][
          this.outline ? 'outline' : 'solid'
        ];
    } else if (this.gradientMonochrome) {
      this.buttonClass += buttonMonochromeColorClasses[this.gradientMonochrome];
    } else {
      this.buttonClass +=
        buttonColorClasses[this.color][this.outline ? 'outline' : 'solid'];
    }
    this.buttonClass += buttonPillClasses[String(this.pill)];
    this.buttonClass += buttonDisableClasses[String(this.disabled)];
    this.buttonClass += buttonSizeClasses[this.size];
  }
}
