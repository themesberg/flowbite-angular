import { Component, Input, OnInit } from '@angular/core';
import {
  buttonBaseClass,
  buttonColorClasses,
  ButtonColors,
  buttonDisableClasses,
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
  @Input() size: ButtonSizes = 'md';
  @Input() pill = false;
  @Input() outline = false;
  @Input() disabled = false;

  buttonClass = buttonBaseClass;

  ngOnInit() {
    this.buttonClass +=
      buttonColorClasses[this.color][this.outline ? 'outline' : 'solid'];
    this.buttonClass += buttonPillClasses[String(this.pill)];
    this.buttonClass += buttonDisableClasses[String(this.disabled)];
    this.buttonClass += buttonSizeClasses[this.size];
  }
}
