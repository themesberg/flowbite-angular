import type { DeepPartial } from '../../common';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import type { NavbarContentClass, NavbarContentTheme } from './navbar-content.theme';
import { NavbarContentThemeService } from './navbar-content.theme.service';
import { NavbarComponent } from './navbar.component';
import type { NavbarColors } from './navbar.theme';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, inject, model } from '@angular/core';

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
export class NavbarContentComponent extends BaseComponent<NavbarContentClass> implements OnInit {
  public readonly themeService = inject(NavbarContentThemeService);
  public readonly navbarComponent = model<NavbarComponent>(inject(NavbarComponent));

  //#region properties
  public color = model<keyof NavbarColors>(this.navbarComponent().color());
  public customStyle = model<DeepPartial<NavbarContentTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarContentClass {
    return this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.navbarComponent().isOpen()),
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
