import * as properties from './sidebar.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import { SidebarService } from '../../services';
import { paramNotNull } from '../../utils/param.util';

import { AsyncPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  //#region properties
  protected $rounded: keyof FlowbiteBoolean = 'disabled';
  protected $customStyle: Partial<properties.SidebarBaseTheme> = {};
  //#endregion
  //#region getter/setter
  /** @default disabled */
  public get rounded(): keyof FlowbiteBoolean {
    return this.$rounded;
  }
  @Input() public set rounded(value: keyof FlowbiteBoolean) {
    this.$rounded = value;
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
    if (paramNotNull(this.rounded, this.customStyle)) {
      const propertyClass = properties.getClasses({
        rounded: this.rounded,
        customStyle: this.customStyle,
      });

      this.componentClass = propertyClass.sidebarClass;
      this.contentClasses = {
        sidebarContent: propertyClass.sidebarContentClass,
      };
    }
  }
  //#endregion
}
