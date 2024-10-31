import { NavbarBrandComponent } from './navbar-brand.component';
import { NavbarContentComponent } from './navbar-content.component';
import { NavbarToggleComponent } from './navbar-toggle.component';
import type { NavbarClass, NavbarColors, NavbarTheme } from './navbar.theme';
import { NavbarThemeService } from './navbar.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  inject,
  model,
  untracked,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/navbar/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-navbar',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent extends BaseComponent<NavbarClass> {
  /**
   * Service injecteed used to generate class
   */
  public readonly themeService = inject(NavbarThemeService);
  /**
   * The child `NavbarBrandComponent`
   */
  public readonly navbarBrandChild = contentChild(NavbarBrandComponent);
  /**
   * The child `NavbarToggleComponent`
   */
  public readonly navbarToggleChild = contentChild(NavbarToggleComponent);
  /**
   * The child `NavbarContentComponent`
   */
  public readonly navbarContentChild = contentChild(NavbarContentComponent);

  //#region properties
  /**
   * Set the navbar color
   *
   * @default primary
   */
  public color = model<keyof NavbarColors>('primary');
  /**
   * Set if the navbar is open
   *
   * @default false
   */
  public isOpen = model<boolean>(false);
  /**
   * Set if the navbar is rounded
   *
   * @default false
   */
  public isRounded = model<boolean>(false);
  /**
   * Set if the navbar has border
   *
   * @default false
   */
  public hasBorder = model<boolean>(false);
  /**
   * Set if the navbar is fixed
   *
   * @default false
   */
  public isFixed = model<boolean>(false);
  /**
   * Set the custom style for this navbar
   */
  public customStyle = model<DeepPartial<NavbarTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarClass {
    return this.themeService.getClasses({
      hasBorder: booleanToFlowbiteBoolean(this.isRounded()),
      isRounded: booleanToFlowbiteBoolean(this.hasBorder()),
      isFixed: booleanToFlowbiteBoolean(this.isFixed()),
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.navbarContentChild() === undefined) {
      throw new Error('No NavbarContentComponent available');
    }
  }
  //#endregion

  /**
   * Toggle visibility of the navbar
   *
   * @param isOpen When provide force the isOpen value
   */
  public toggleVisibility(isOpen?: boolean): void {
    if (isOpen === undefined) {
      isOpen = untracked(() => !this.isOpen());
    }

    this.isOpen.set(isOpen);
  }
}
