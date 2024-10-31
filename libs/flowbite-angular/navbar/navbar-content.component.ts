import type { NavbarContentClass, NavbarContentTheme } from './navbar-content.theme';
import { NavbarContentThemeService } from './navbar-content.theme.service';
import { NavbarComponent } from './navbar.component';
import type { NavbarColors } from './navbar.theme';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/navbar/
 */
@Component({
  selector: 'flowbite-navbar-content',
  standalone: true,
  imports: [NgClass],
  template: `
    <div [ngClass]="contentClasses().navbarContentListClass">
      <ng-content />
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarContentComponent extends BaseComponent<NavbarContentClass> implements OnInit {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(NavbarContentThemeService);
  /**
   * The parent `NavbarComponent`
   */
  public readonly navbarComponent = model(inject(NavbarComponent));

  //#region properties
  /**
   * Set the navbar content color
   *
   * @default `NavbarComponent`'s color
   */
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
