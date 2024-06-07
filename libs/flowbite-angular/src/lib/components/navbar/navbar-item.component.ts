import * as properties from './navbar-item.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flowbite-navbar-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.css',
})
export class NavbarItemComponent extends BaseComponent {
  protected override contentClasses = signal<properties.NavbarItemClass>(
    properties.NavbarItemClassInstance(),
  );
  //#region properties
  public color = input<keyof properties.NavbarItemColors>('blue');
  public customStyle = input<Partial<properties.NavbarItemBaseTheme>>({});
  public href = input<string | undefined>(undefined);
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.color(), this.customStyle())) {
      const propertyClass = properties.getClasses({
        color: this.color(),
        customStyle: this.customStyle(),
      });

      this.contentClasses.set(propertyClass);
    }
  }
  //#endregion
}
