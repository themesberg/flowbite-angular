import * as properties from './breadcrumb-item.theme';

import { BaseComponent } from '../base.component';
import { BreadcrumbItemThemeService } from './breadcrumb-item.theme.service';

import { Component, inject, input, signal } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
})
export class BreadcrumbItemComponent extends BaseComponent {
  protected themeService = inject(BreadcrumbItemThemeService);

  protected override contentClasses = signal<properties.BreadcrumbItemClass>(
    properties.BreadcrumbItemClassInstance,
  );

  //#region properties
  public href = input<string | undefined>(undefined);
  public customStyle = input<Partial<properties.BreadcrumbItemBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      href: this.href(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
