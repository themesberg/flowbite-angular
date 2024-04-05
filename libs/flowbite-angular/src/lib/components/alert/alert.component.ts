import * as properties from './alert.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';

import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent extends BaseComponent implements OnInit {
  @Input() color: keyof properties.AlertColors = 'blue';
  @Input() rounded: keyof FlowbiteBoolean = 'enabled';
  @Input() borderAccent: keyof FlowbiteBoolean = 'disabled';
  @Input() customStyle: Partial<properties.AlertBaseTheme> = {};

  @Input() icon: TemplateRef<unknown> | null = null;
  @Input() additionalContent: TemplateRef<unknown> | null = null;
  @Input() dismiss!: () => void;

  ngOnInit(): void {
    const t = properties.getClasses({
      color: this.color,
      borderAccent: this.borderAccent,
      rounded: this.rounded,
      customStyle: this.customStyle,
    });

    this.componentClass = t.alertClass;
    this.contentClasses = {
      alertButton: t.alertButtonClass,
    };
  }
}
