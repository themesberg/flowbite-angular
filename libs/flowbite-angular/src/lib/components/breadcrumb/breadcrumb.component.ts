import * as properties from './breadcrumb.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent extends BaseComponent {
  //#region properties
  protected $customStyle: Partial<properties.BreadcrumbBaseTheme> = {};
  //#endregion
  //#region getter/setter
  public get customStyle(): Partial<properties.BreadcrumbBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.BreadcrumbBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.customStyle)) {
      const propertyClass = properties.getClasses({
        customStyle: this.customStyle,
      });

      this.componentClass = propertyClass.root;
    }
  }
  //#endregion
}
