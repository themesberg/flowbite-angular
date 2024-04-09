import * as properties from './badge.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import {
  booleanToFlowbiteBoolean,
  flowbiteBooleanToBoolean,
} from '../../utils/boolean.util';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input, booleanAttribute } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * @see https://flowbite.com/docs/components/badge/
 */
@Component({
  standalone: true,
  imports: [NgClass, RouterLink],
  selector: 'flowbite-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.BadgeClass,
    string
  >;
  //#region properties
  protected $color: keyof properties.BadgeColors = 'blue';
  protected $size: keyof properties.BadgeSizes = 'xs';
  protected $isIconOnly: keyof FlowbiteBoolean = 'disabled';
  protected $isPill: keyof FlowbiteBoolean = 'disabled';
  protected $href?: string;
  protected $customStyle: Partial<properties.BadgeBaseTheme> = {};
  //#endregion
  //#region getter/setter
  /** @default blue */
  public get color(): keyof properties.BadgeColors {
    return this.$color;
  }
  @Input() public set color(value: keyof properties.BadgeColors) {
    this.$color = value;
    this.fetchClass();
  }

  /** @default xs */
  public get size(): keyof properties.BadgeSizes {
    return this.$size;
  }
  @Input() public set size(value: keyof properties.BadgeSizes) {
    this.$size = value;
    this.fetchClass();
  }

  /** @default false */
  public get isIconOnly(): boolean {
    return flowbiteBooleanToBoolean(this.$isIconOnly);
  }
  @Input({ transform: booleanAttribute }) public set isIconOnly(
    value: boolean,
  ) {
    this.$isIconOnly = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default false */
  public get isPill(): boolean {
    return flowbiteBooleanToBoolean(this.$isPill);
  }
  @Input({ transform: booleanAttribute }) public set isPill(value: boolean) {
    this.$isPill = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default undefined */
  public get href(): string | undefined {
    return this.$href;
  }
  @Input() public set href(value: string | undefined) {
    this.$href = value;
    this.fetchClass();
  }

  /** @default {} */
  public get customStyle(): Partial<properties.BadgeBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(value: Partial<properties.BadgeBaseTheme>) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (
      paramNotNull(
        this.$color,
        this.$size,
        this.$isIconOnly,
        this.$isPill,
        this.$customStyle,
      )
    ) {
      const propertyClass = properties.getClasses({
        color: this.$color,
        size: this.$size,
        isIconOnly: this.$isIconOnly,
        isPill: this.$isPill,
        href: this.$href,
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion
}
