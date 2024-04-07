import * as properties from './navbar.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent extends BaseComponent {
  //#region properties
  public $rounded: keyof FlowbiteBoolean = 'disabled';
  public $border: keyof FlowbiteBoolean = 'disabled';
  public $fluid: keyof FlowbiteBoolean = 'disabled';
  public $customStyle: Partial<properties.NavbarBaseTheme> = {};
  //#endregion
  //#region getter/setter
  public get rounded(): keyof FlowbiteBoolean {
    return this.$rounded;
  }
  @Input() public set rounded(value: keyof FlowbiteBoolean) {
    this.$rounded = value;
    this.fetchClass();
  }

  public get border(): keyof FlowbiteBoolean {
    return this.$border;
  }
  @Input() public set border(value: keyof FlowbiteBoolean) {
    this.$border = value;
    this.fetchClass();
  }

  public get fluid(): keyof FlowbiteBoolean {
    return this.$fluid;
  }
  @Input() public set fluid(value: keyof FlowbiteBoolean) {
    this.$fluid = value;
    this.fetchClass();
  }

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
    if (paramNotNull(this.rounded, this.border, this.fluid, this.customStyle)) {
      const propertyClass = properties.getClasses({
        border: this.border,
        fluid: this.fluid,
        rounded: this.rounded,
        customStyle: this.customStyle,
      });

      this.componentClass = propertyClass.navbarClass;
      this.contentClasses = {
        content: propertyClass.contentClass,
      };
    }
  }
  //#endregion
}
