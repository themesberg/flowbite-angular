import * as properties from './nabvar-item.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flowbite-navbar-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.css',
})
export class NavbarItemComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.NavbarItemClass,
    string
  > = undefined;
  //#region properties
  protected $color: keyof properties.NavbarItemColors = 'blue';
  protected $customStyle: Partial<properties.NavbarItemBaseTheme> = {};

  protected $href?: string;
  //#endregion
  //#region getter/setter
  /** @default {} */
  public get customStyle(): Partial<properties.NavbarItemBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.NavbarItemBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }

  /** @default blue */
  public get color(): keyof properties.NavbarItemColors {
    return this.$color;
  }
  @Input() public set color(value: keyof properties.NavbarItemColors) {
    this.$color = value;
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
    if (paramNotNull(this.$color, this.$customStyle)) {
      this.contentClasses = properties.getClasses({
        color: this.$color,
        customStyle: this.$customStyle,
      });
    }
  }
  //#endregion
}
