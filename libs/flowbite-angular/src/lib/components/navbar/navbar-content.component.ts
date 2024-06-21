import * as properties from './navbar-content.theme';

import { BaseComponent } from '../base.component';
import { NavbarContentThemeService } from './navbar-content.theme.service';
import { NavbarState, SignalStoreService } from '../../services';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import { Component, OnInit, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'flowbite-navbar-content',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-content.component.html',
})
export class NavbarContentComponent extends BaseComponent implements OnInit {
  protected readonly themeService = inject(NavbarContentThemeService);
  protected readonly navbarService = inject<SignalStoreService<NavbarState>>(
    SignalStoreService<NavbarState>,
  );

  protected override contentClasses = signal<properties.NavbarContentClass>(
    properties.NavbarContentClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.NavbarContentBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(
        this.navbarService.select('isCollapsed')(),
      ),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
