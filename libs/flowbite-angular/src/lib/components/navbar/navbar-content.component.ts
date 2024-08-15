import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import type { NavbarContentClass, NavbarContentTheme } from './navbar-content.theme';
import { NavbarContentThemeService } from './navbar-content.theme.service';
import { NavbarComponent } from './navbar.component';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  selector: 'flowbite-navbar-content',
  standalone: true,
  imports: [NgClass],
  template: `
    <div [ngClass]="contentClasses().navbarContentListClass">
      <ng-content />
    </div>
  `,
})
export class NavbarContentComponent extends BaseComponent implements OnInit {
  public readonly themeService = inject(NavbarContentThemeService);
  public readonly navbarComponent = inject(NavbarComponent);

  public override contentClasses = signal<NavbarContentClass>(
    createClass({ navbarContentListClass: '', rootClass: '' }),
  );

  //#region properties
  public customStyle = input<DeepPartial<NavbarContentTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.navbarComponent.stateService.select('isOpen')()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
