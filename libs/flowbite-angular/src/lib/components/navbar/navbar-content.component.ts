import * as properties from './navbar-content.theme';
import { BaseComponent } from '../base.component';

import { Component, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { paramNotNull } from '../../utils/param.util';

@Component({
  selector: 'flowbite-navbar-content',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.css',
})
export class NavbarContentComponent extends BaseComponent {
  protected override contentClasses = signal<properties.NavbarContentClass>(
    properties.NavbarContentClassInstance(),
  );
  //#region properties
  public customStyle = input<Partial<properties.NavbarContentBaseTheme>>({});
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
