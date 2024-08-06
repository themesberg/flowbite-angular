import type { DeepPartial } from '../../common';
import { NavbarStateService } from '../../services';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
import * as properties from './navbar-content.theme';
import { NavbarContentThemeService } from './navbar-content.theme.service';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  selector: 'flowbite-navbar-content',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-content.component.html',
})
export class NavbarContentComponent extends BaseComponent implements OnInit {
  public readonly themeStateService = inject(NavbarContentThemeService);
  public readonly navbarService = inject<NavbarStateService>(NavbarStateService);

  public override contentClasses = signal<properties.NavbarContentClass>(properties.NavbarContentClassInstance);

  //#region properties
  public customStyle = input<DeepPartial<properties.NavbarContentBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeStateService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.navbarService.select('isOpen')()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
