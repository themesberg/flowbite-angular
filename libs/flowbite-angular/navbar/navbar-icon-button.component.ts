import { NavbarContentComponent } from './navbar-content.component';
import type { NavbarIconButtonClass, NavbarIconButtonTheme } from './navbar-icon-button.theme';
import { NavbarIconButtonThemeService } from './navbar-icon-button.theme.service';
import { NavbarComponent } from './navbar.component';
import type { NavbarColors } from './navbar.theme';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

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
  selector: 'flowbite-navbar-icon-button',
  standalone: true,
  imports: [],
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarIconButtonComponent extends BaseComponent<NavbarIconButtonClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(NavbarIconButtonThemeService);
  /**
   * The optional parent `NavbarComponent`
   */
  public readonly navbarComponent = inject(NavbarComponent, { optional: true });
  /**
   * The optional parent `NavbarContentComponent`
   */
  public readonly navbarContentComponent = inject(NavbarContentComponent, { optional: true });

  //#region properties
  /**
   * Set the navbar icon button color
   *
   * @default `NavbarContentComponent`'s color
   * @default `NavbarComponent`'s color
   */
  public color = model<keyof NavbarColors>(
    this.navbarContentComponent?.color() || this.navbarComponent!.color()
  );
  /**
   * Set the custom style for this navbar icon button
   */
  public customStyle = model<DeepPartial<NavbarIconButtonTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarIconButtonClass {
    return this.themeService.getClasses({
      color: this.color(),
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.navbarComponent === null && this.navbarContentComponent === null) {
      throw new Error('No NavbarComponent/NavbarContentComponent available');
    }
  }
}
