import * as properties from './sidebar.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import { SidebarService } from '../../services';
import {
  booleanToFlowbiteBoolean,
  flowbiteBooleanToBoolean,
} from '../../utils/boolean.util';
import { paramNotNull } from '../../utils/param.util';

import { AsyncPipe, NgClass } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
  imports: [NgClass, AsyncPipe],
  selector: 'flowbite-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.SidebarClass,
    string
  >;
  //#region properties
  protected $rounded: keyof FlowbiteBoolean = 'disabled';
  protected $customStyle: Partial<properties.SidebarBaseTheme> = {};
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

  /** @default {} */
  public get customStyle(): Partial<properties.SidebarBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(value: Partial<properties.SidebarBaseTheme>) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  constructor(readonly sidebarService: SidebarService) {
    super();
  }

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.$rounded, this.$customStyle)) {
      const propertyClass = properties.getClasses({
        rounded: this.$rounded,
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion
}
