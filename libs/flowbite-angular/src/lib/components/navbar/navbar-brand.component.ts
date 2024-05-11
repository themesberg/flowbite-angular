import * as properties from './navbar-brand.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flowbite-navbar-brand',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-brand.component.html',
  styleUrl: './navbar-brand.component.css',
})
export class NavbarBrandComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.NavbarBrandClass,
    string
  >;
  //#region properties
  protected $customStyle: Partial<properties.NavbarBrandBaseTheme> = {};

  protected $href?: string;
  //#endregion
  //#region getter/setter
  public get customStyle(): Partial<properties.NavbarBrandBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.NavbarBrandBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }

  /** @default undefined */
  public get href(): string | undefined {
    return this.$href;
  }
  @Input() public set href(value: string | undefined) {
    this.$href = value;
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
