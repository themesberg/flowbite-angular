import * as properties from './breadcrumb-item.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, HostBinding, Input } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
})
export class BreadcrumbItemComponent extends BaseComponent {
  //#region properties
  protected $href?: string;
  protected $customStyle: Partial<properties.BreadcrumbItemBaseTheme> = {};
  //#endregion
  //#region getter/setter
  @HostBinding('attr.class') hostClass = 'group flex items-center';

  public get href(): string | undefined {
    return this.$href;
  }
  @Input() public set href(value: string | undefined) {
    this.$href = value;
    this.fetchClass();
  }

  public get customStyle(): Partial<properties.BreadcrumbItemBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.BreadcrumbItemBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.customStyle)) {
      const propertyClass = properties.getClasses({
        href: this.href,
        customStyle: this.customStyle,
      });

      this.componentClass = propertyClass.breadcrumbClass;
      this.contentClasses = {
        content: propertyClass.contentClass,
      };
    }
  }
  //#endregion
}
