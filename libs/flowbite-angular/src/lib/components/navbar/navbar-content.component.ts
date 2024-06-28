import * as properties from './navbar-content.theme';

import { BaseComponent } from '../base.component';
import { NavbarContentThemeService } from './navbar-content.theme.service';
import { NavbarStateService } from '../../services';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import { Component, OnInit, inject, input, signal } from '@angular/core';
import { DeepPartial } from '../../common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flowbite-navbar-content',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-content.component.html',
})
export class NavbarContentComponent extends BaseComponent implements OnInit {
  protected override contentClasses = signal<properties.NavbarContentClass>(
    properties.NavbarContentClassInstance,
  );

  protected readonly themeStateService = inject(NavbarContentThemeService);
  protected readonly navbarService =
    inject<NavbarStateService>(NavbarStateService);

  //#region properties
  public customStyle = input<DeepPartial<properties.NavbarContentBaseTheme>>(
    {},
  );
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeStateService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.navbarService.select('isOpen')()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
