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
  imports: [NgIf,NgTemplateOutlet],
  selector: 'flowbite-button',
  template: `
    <button type="button" [class]="buttonClass" [disabled]="disabled">
      <span
        *ngIf="gradientDuoTone && outline; else default"
        [class]="spanClass"
      >
        <ng-container *ngTemplateOutlet="contentOutlet"></ng-container>
      </span>

      <ng-template #default>
        <ng-container *ngTemplateOutlet="contentOutlet"></ng-container>
      </ng-template>

      <ng-template #contentOutlet>
        <ng-content></ng-content>
      </ng-template>
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
