import * as properties from './navbar-brand.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flowbite-navbar-brand',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-brand.component.html',
  styleUrl: './navbar-brand.component.css',
})
export class NavbarBrandComponent extends BaseComponent {
  protected override contentClasses = signal<properties.NavbarBrandClass>(
    properties.NavbarBrandClassInstance(),
  );
  //#region properties
  public customStyle = input<Partial<properties.NavbarBrandBaseTheme>>({});
  public href = input<string | undefined>(undefined);
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
