import { Component, Input, OnInit } from '@angular/core';
import {
  buttonColorClasses,
  ButtonColors,
  buttonPillClasses,
  buttonSizeClasses,
  ButtonSizes,
} from './button.properties';

@Component({
  selector: 'flowbite-button',
  template: `
    <button type="button" [class]="buttonClass">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent implements OnInit {
  @Input() color: ButtonColors = 'info';
  @Input() size: ButtonSizes = 'md';
  @Input() pill = false;

  buttonClass =
    'group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10 ';

  ngOnInit() {
    this.buttonClass += buttonColorClasses[this.color];
    this.buttonClass += buttonSizeClasses[this.size];
    this.buttonClass += buttonPillClasses[String(this.pill)];
  }
}
