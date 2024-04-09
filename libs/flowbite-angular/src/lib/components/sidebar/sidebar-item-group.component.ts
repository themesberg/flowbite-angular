import * as properties from './sidebar-item-group.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-sidebar-item-group',
  templateUrl: './sidebar-item-group.component.html',
})
export class SidebarItemGroupComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.SidebarItemGroupClass,
    string
  >;
  //#region properties
  protected $customStyle: Partial<properties.SidebarItemGroupBaseTheme> = {};
  //#endregion
  //#region getter/setter
  /** @default {} */
  public get customStyle(): Partial<properties.SidebarItemGroupBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.SidebarItemGroupBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.$customStyle)) {
      const propertyClass = properties.getClasses({
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion
}
