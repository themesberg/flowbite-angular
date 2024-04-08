import * as properties from './alert.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import {
  booleanToFlowbiteBoolean,
  flowbiteBooleanToBoolean,
} from '../../utils/boolean.util';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input, TemplateRef, booleanAttribute } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/alerts/
 */
@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.AlertClass,
    string
  >;
  //#region properties
  protected $color: keyof properties.AlertColors = 'blue';
  protected $rounded: keyof FlowbiteBoolean = 'enabled';
  protected $borderAccent: keyof FlowbiteBoolean = 'disabled';
  protected $customStyle: Partial<properties.AlertBaseTheme> = {};

  protected $icon: TemplateRef<unknown> | null = null;
  protected $additionalContent: TemplateRef<unknown> | null = null;
  protected $dismiss!: () => void;
  //#endregion
  //#region getter/setter
  /** @default blue */
  public get color(): keyof properties.AlertColors {
    return this.$color;
  }
  @Input() public set color(value: keyof properties.AlertColors) {
    this.$color = value;
    this.fetchClass();
  }

  /** @default true */
  public get rounded(): boolean {
    return flowbiteBooleanToBoolean(this.$rounded);
  }
  @Input({ transform: booleanAttribute }) public set rounded(value: boolean) {
    this.$rounded = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default false */
  public get borderAccent(): boolean {
    return flowbiteBooleanToBoolean(this.$borderAccent);
  }
  @Input({ transform: booleanAttribute }) public set borderAccent(
    value: boolean,
  ) {
    this.$borderAccent = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default {} */
  public get customStyle(): Partial<properties.AlertBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(value: Partial<properties.AlertBaseTheme>) {
    this.$customStyle = value;
    this.fetchClass();
  }

  /** @default null */
  public get icon(): TemplateRef<unknown> | null {
    return this.$icon;
  }
  @Input() public set icon(value: TemplateRef<unknown> | null) {
    this.$icon = value;
    this.fetchClass();
  }

  /** @default null */
  public get additionalContent(): TemplateRef<unknown> | null {
    return this.$additionalContent;
  }
  @Input() public set additionalContent(value: TemplateRef<unknown> | null) {
    this.$additionalContent = value;
    this.fetchClass();
  }

  public get dismiss(): () => void {
    return this.$dismiss;
  }
  @Input() public set dismiss(value: () => void) {
    this.$dismiss = value;
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (
      paramNotNull(
        this.$color,
        this.$rounded,
        this.$borderAccent,
        this.$customStyle,
      )
    ) {
      const propertyClass = properties.getClasses({
        color: this.$color,
        borderAccent: this.$borderAccent,
        rounded: this.$rounded,
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion
}
