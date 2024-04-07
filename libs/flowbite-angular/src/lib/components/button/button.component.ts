import * as properties from './button.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent extends BaseComponent {
  //#region properties
  protected $color: keyof properties.ButtonColors = 'info';
  protected $size: keyof properties.ButtonSizes = 'md';
  protected $pill: keyof FlowbiteBoolean = 'disabled';
  protected $outline: keyof properties.ButtonFill = 'solid';
  protected $disabled: keyof FlowbiteBoolean = 'disabled';
  protected $gradientMonochrome?: keyof properties.ButtonMonochromeColors;
  protected $gradientDuoTone?: keyof properties.ButtonDuoToneColors;
  protected $customStyle: Partial<properties.ButtonBaseTheme> = {};
  //#endregion
  //#region getter/setter
  public get color(): keyof properties.ButtonColors {
    return this.$color;
  }
  @Input() public set color(value: keyof properties.ButtonColors) {
    this.$color = value;
    this.fetchClass();
  }

  public get size(): keyof properties.ButtonSizes {
    return this.$size;
  }
  @Input() public set size(value: keyof properties.ButtonSizes) {
    this.$size = value;
    this.fetchClass();
  }

  public get pill(): keyof FlowbiteBoolean {
    return this.$pill;
  }
  @Input() public set pill(value: keyof FlowbiteBoolean) {
    this.$pill = value;
    this.fetchClass();
  }

  public get outline(): keyof properties.ButtonFill {
    return this.$outline;
  }
  @Input() public set outline(value: keyof properties.ButtonFill) {
    this.$outline = value;
    this.fetchClass();
  }

  public get disabled(): keyof FlowbiteBoolean {
    return this.$disabled;
  }
  @Input() public set disabled(value: keyof FlowbiteBoolean) {
    this.$disabled = value;
    this.fetchClass();
  }

  public get gradientMonochrome():
    | keyof properties.ButtonMonochromeColors
    | undefined {
    return this.$gradientMonochrome;
  }
  @Input() public set gradientMonochrome(
    value: keyof properties.ButtonMonochromeColors | undefined,
  ) {
    this.$gradientMonochrome = value;
    this.fetchClass();
  }

  public get gradientDuoTone():
    | keyof properties.ButtonDuoToneColors
    | undefined {
    return this.$gradientDuoTone;
  }
  @Input() public set gradientDuoTone(
    value: keyof properties.ButtonDuoToneColors | undefined,
  ) {
    this.$gradientDuoTone = value;
    this.fetchClass();
  }

  public get customStyle(): Partial<properties.ButtonBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(value: Partial<properties.ButtonBaseTheme>) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass() {
    if (
      paramNotNull(
        this.color,
        this.disabled,
        this.outline,
        this.pill,
        this.size,
        this.customStyle,
      )
    ) {
      const propertyClass = properties.getClasses({
        color: this.color,
        disabled: this.disabled,
        outline: this.outline,
        pill: this.pill,
        size: this.size,
        customStyle: this.customStyle,
      });

      this.componentClass = propertyClass.buttonClass;
      this.contentClasses = {
        span: propertyClass.spanClass,
      };
    }
  }
  //#endregion
}
