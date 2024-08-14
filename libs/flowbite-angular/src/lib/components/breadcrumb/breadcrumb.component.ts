import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { BaseComponent } from '../base.component';
import type { BreadcrumbClass, BreadcrumbTheme } from './breadcrumb.theme';
import { BreadcrumbThemeService } from './breadcrumb.theme.service';

import { NgClass } from '@angular/common';
import { Component, HostBinding, inject, input, signal } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/breadcrumb/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-breadcrumb',
  template: `<ng-content />`,
})
export class BreadcrumbComponent extends BaseComponent {
  @HostBinding('attr.aria-label') hostAriaLabelValue = 'breadcrumb';

  public readonly themeService = inject(BreadcrumbThemeService);

  public override contentClasses = signal<BreadcrumbClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<BreadcrumbTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
