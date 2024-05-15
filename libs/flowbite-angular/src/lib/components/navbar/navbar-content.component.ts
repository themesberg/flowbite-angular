import * as properties from './navbar-content.theme';
import { BaseComponent } from '../base.component';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { paramNotNull } from '../../utils/param.util';

@Component({
  selector: 'flowbite-navbar-content',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.css',
})
export class NavbarContentComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.NavbarContentClass,
    string
  > = undefined;
  //#region properties
  protected $customStyle: Partial<properties.NavbarContentBaseTheme> = {};
  //#endregion
  //#region getter/setter
  public get customStyle(): Partial<properties.NavbarContentBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.NavbarContentBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.$customStyle)) {
      this.contentClasses = properties.getClasses({
        customStyle: this.$customStyle,
      });
    }
  }
  //#endregion
}
