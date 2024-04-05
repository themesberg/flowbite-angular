import * as properties from './indicators.theme';
import { BaseComponent } from '../base.component';
import {
  FlowbiteBoolean,
  FlowbitePositions,
  FlowbiteSizes,
} from '../../common/flowbite.theme';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-indicator',
  templateUrl: './indicators.component.html',
})
export class IndicatorComponent extends BaseComponent {
  @Input() pill: keyof FlowbiteBoolean = 'disabled';
  @Input() outline: keyof FlowbiteBoolean = 'disabled';
  @Input() disabled: keyof FlowbiteBoolean = 'disabled';
  @Input() offset: keyof FlowbiteBoolean = 'enabled';
  @Input() rounded: keyof FlowbiteBoolean = 'disabled';
  @Input() border: keyof FlowbiteBoolean = 'disabled';
  @Input() color: keyof properties.IndicatorColors = 'gray';
  @Input() size: keyof FlowbiteSizes = 'md';
  @Input() placement?: keyof FlowbitePositions;
  @Input() customStyle: Partial<properties.IndicatorBaseTheme> = {};

  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      border: this.border,
      color: this.color,
      disabled: this.disabled,
      offset: this.offset,
      outline: this.outline,
      pill: this.pill,
      placement: this.placement,
      rounded: this.rounded,
      size: this.size,
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
