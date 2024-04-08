import * as properties from './indicators.theme';
import { BaseComponent } from '../base.component';
import {
  FlowbiteBoolean,
  FlowbitePositions,
  FlowbiteSizes,
} from '../../common/flowbite.theme';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input, booleanAttribute } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  booleanToFlowbiteBoolean,
  flowbiteBooleanToBoolean,
} from '../../utils/boolean.util';

/**
 * @see https://flowbite.com/docs/components/indicators/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-indicator',
  templateUrl: './indicators.component.html',
})
export class IndicatorComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.indicatorClass,
    string
  >;
  //#region properties
  public $pill: keyof FlowbiteBoolean = 'disabled';
  public $outline: keyof FlowbiteBoolean = 'disabled';
  public $disabled: keyof FlowbiteBoolean = 'disabled';
  public $offset: keyof FlowbiteBoolean = 'enabled';
  public $rounded: keyof FlowbiteBoolean = 'disabled';
  public $border: keyof FlowbiteBoolean = 'disabled';
  public $color: keyof properties.IndicatorColors = 'gray';
  public $size: keyof FlowbiteSizes = 'md';
  public $placement?: keyof FlowbitePositions;
  public $customStyle: Partial<properties.IndicatorBaseTheme> = {};
  //#endregion
  //#region getter/setter
  /** @default false */
  public get pill(): boolean {
    return flowbiteBooleanToBoolean(this.$pill);
  }
  @Input({ transform: booleanAttribute }) public set pill(value: boolean) {
    this.$pill = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default false */
  public get outline(): boolean {
    return flowbiteBooleanToBoolean(this.$outline);
  }
  @Input({ transform: booleanAttribute }) public set outline(value: boolean) {
    this.$outline = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default false */
  public get disabled(): boolean {
    return flowbiteBooleanToBoolean(this.$disabled);
  }
  @Input({ transform: booleanAttribute }) public set disabled(value: boolean) {
    this.$disabled = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default true */
  public get offset(): boolean {
    return flowbiteBooleanToBoolean(this.$offset);
  }
  @Input({ transform: booleanAttribute }) public set offset(value: boolean) {
    this.$offset = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default false */
  public get rounded(): boolean {
    return flowbiteBooleanToBoolean(this.$rounded);
  }
  @Input({ transform: booleanAttribute }) public set rounded(value: boolean) {
    this.$rounded = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default false */
  public get border(): boolean {
    return flowbiteBooleanToBoolean(this.$rounded);
  }
  @Input({ transform: booleanAttribute }) public set border(value: boolean) {
    this.$border = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default gray */
  public get color(): keyof properties.IndicatorColors {
    return this.$color;
  }
  @Input() public set color(value: keyof properties.IndicatorColors) {
    this.$color = value;
    this.fetchClass();
  }

  /** @default md */
  public get size(): keyof FlowbiteSizes {
    return this.$size;
  }
  @Input() public set size(value: keyof FlowbiteSizes) {
    this.$size = value;
    this.fetchClass();
  }

  /** @default undefined */
  public get placement(): keyof FlowbitePositions | undefined {
    return this.$placement;
  }
  @Input() public set placement(value: keyof FlowbitePositions | undefined) {
    this.$placement = value;
    this.fetchClass();
  }

  /** @default {} */
  public get customStyle(): Partial<properties.IndicatorBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.IndicatorBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  //#region BaseComponent implementation
  //#endregion

  protected override fetchClass(): void {
    if (
      paramNotNull(
        this.$border,
        this.$color,
        this.$disabled,
        this.$offset,
        this.$outline,
        this.$pill,
        this.$rounded,
        this.$size,
        this.$customStyle,
      )
    ) {
      const propertyClass = properties.getClasses({
        border: this.$border,
        color: this.$color,
        disabled: this.$disabled,
        offset: this.$offset,
        outline: this.$outline,
        pill: this.$pill,
        rounded: this.$rounded,
        size: this.$size,
        placement: this.$placement,
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
}
