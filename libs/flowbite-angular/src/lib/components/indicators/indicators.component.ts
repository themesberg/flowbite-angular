import * as properties from './indicators.theme';
import { BaseComponent } from '../base.component';
import {
  FlowbiteBoolean,
  FlowbitePositions,
  FlowbiteSizes,
} from '../../common/flowbite.theme';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-indicator',
  templateUrl: './indicators.component.html',
})
export class IndicatorComponent extends BaseComponent {
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
  public get pill(): keyof FlowbiteBoolean {
    return this.$pill;
  }
  @Input() public set pill(value: keyof FlowbiteBoolean) {
    this.$pill = value;
    this.fetchClass();
  }

  public get outline(): keyof FlowbiteBoolean {
    return this.$outline;
  }
  @Input() public set outline(value: keyof FlowbiteBoolean) {
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

  public get offset(): keyof FlowbiteBoolean {
    return this.$offset;
  }
  @Input() public set offset(value: keyof FlowbiteBoolean) {
    this.$offset = value;
    this.fetchClass();
  }

  public get rounded(): keyof FlowbiteBoolean {
    return this.$rounded;
  }
  @Input() public set rounded(value: keyof FlowbiteBoolean) {
    this.$rounded = value;
    this.fetchClass();
  }

  public get border(): keyof FlowbiteBoolean {
    return this.$rounded;
  }
  @Input() public set border(value: keyof FlowbiteBoolean) {
    this.$border = value;
    this.fetchClass();
  }

  public get color(): keyof properties.IndicatorColors {
    return this.$color;
  }
  @Input() public set color(value: keyof properties.IndicatorColors) {
    this.$color = value;
    this.fetchClass();
  }

  public get size(): keyof FlowbiteSizes {
    return this.$size;
  }
  @Input() public set size(value: keyof FlowbiteSizes) {
    this.$size = value;
    this.fetchClass();
  }

  public get placement(): keyof FlowbitePositions | undefined {
    return this.$placement;
  }
  @Input() public set placement(value: keyof FlowbitePositions | undefined) {
    this.$placement = value;
    this.fetchClass();
  }

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
        this.border,
        this.color,
        this.disabled,
        this.offset,
        this.outline,
        this.pill,
        this.rounded,
        this.size,
        this.customStyle,
      )
    ) {
      const propertyClass = properties.getClasses({
        border: this.border,
        color: this.color,
        disabled: this.disabled,
        offset: this.offset,
        outline: this.outline,
        pill: this.pill,
        rounded: this.rounded,
        size: this.size,
        placement: this.placement,
        customStyle: this.customStyle,
      });

      this.componentClass = propertyClass.root;
    }
  }
}
