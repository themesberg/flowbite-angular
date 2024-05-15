import * as properties from './navbar.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import {
  booleanToFlowbiteBoolean,
  flowbiteBooleanToBoolean,
} from '../../utils/boolean.util';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input, booleanAttribute } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/navbar/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.NavbarClass,
    string
  > = undefined;
  //#region properties
  protected $rounded: keyof FlowbiteBoolean = 'disabled';
  protected $border: keyof FlowbiteBoolean = 'disabled';
  protected $fixed: keyof FlowbiteBoolean = 'disabled';
  protected $customStyle: Partial<properties.NavbarBaseTheme> = {};
  //#endregion
  //#region getter/setter
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
    return flowbiteBooleanToBoolean(this.$border);
  }
  @Input({ transform: booleanAttribute }) public set border(value: boolean) {
    this.$border = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default false */
  public get fixed(): boolean {
    return flowbiteBooleanToBoolean(this.$fixed);
  }
  @Input({ transform: booleanAttribute }) public set fixed(value: boolean) {
    this.$fixed = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default {} */
  public get customStyle(): Partial<properties.NavbarBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(value: Partial<properties.NavbarBaseTheme>) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (
      paramNotNull(this.$rounded, this.$border, this.$fixed, this.$customStyle)
    ) {
      const propertyClass = properties.getClasses({
        border: this.$border,
        rounded: this.$rounded,
        fixed: this.$fixed,
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion
}
