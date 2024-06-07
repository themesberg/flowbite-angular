import * as properties from './breadcrumb.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, HostBinding, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/breadcrumb/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent extends BaseComponent {
  @HostBinding('aria-label') protected hostAriaLabelValue = 'Breadcrumb';

  protected override contentClasses = signal<properties.BreadcrumbClass>(
    properties.BreadcrumbClassInstance(),
  );

  //#region properties
  public customStyle = input<Partial<properties.BreadcrumbBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.customStyle())) {
      const propertyClass = properties.getClasses({
        customStyle: this.customStyle(),
      });

      this.contentClasses.set(propertyClass);
    }
  }
  //#endregion
}
