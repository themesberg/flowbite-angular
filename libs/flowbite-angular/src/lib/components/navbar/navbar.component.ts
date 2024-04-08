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
  >;
  //#region properties
  public $rounded: keyof FlowbiteBoolean = 'disabled';
  public $border: keyof FlowbiteBoolean = 'disabled';
  public $fluid: keyof FlowbiteBoolean = 'disabled';
  public $customStyle: Partial<properties.NavbarBaseTheme> = {};
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
  public get fluid(): boolean {
    return flowbiteBooleanToBoolean(this.$fluid);
  }
  @Input({ transform: booleanAttribute }) public set fluid(value: boolean) {
    this.$fluid = booleanToFlowbiteBoolean(value);
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
      paramNotNull(this.$rounded, this.$border, this.$fluid, this.$customStyle)
    ) {
      const propertyClass = properties.getClasses({
        border: this.$border,
        fluid: this.$fluid,
        rounded: this.$rounded,
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion
}
