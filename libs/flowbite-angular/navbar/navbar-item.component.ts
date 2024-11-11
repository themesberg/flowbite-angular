import { NavbarContentComponent } from './navbar-content.component';
import type { NavbarItemClass, NavbarItemTheme } from './navbar-item.theme';
import { NavbarItemThemeService } from './navbar-item.theme.service';
import type { NavbarColors } from './navbar.theme';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';
import { FlowbiteRouterLinkActiveDirective } from 'flowbite-angular/router-link-active';

import { NgClass } from '@angular/common';
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
  selector: 'flowbite-navbar-item',
  standalone: true,
  imports: [NgClass],
  template: `<ng-content />`,
  host: {
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarItemComponent extends BaseComponent<NavbarItemClass> {
  /**
   * Optional `FlowbiteRouterLinkDirective` injected
   */
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective, { optional: true });
  /**
   * Optional `FlowbiteRouterLinkActiveDirective` injected
   */
  public readonly flowbiteRouterLinkActive = inject(FlowbiteRouterLinkActiveDirective, {
    optional: true,
  });
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(NavbarItemThemeService);
  /**
   * The parent `NavbarContentComponent`
   */
  public readonly navbarContentComponent = inject(NavbarContentComponent);

  //#region properties
  /**
   * Set the navbar item color
   *
   * @default `NavbarContentComponent`'s color
   */
  public color = model<keyof NavbarColors>(this.navbarContentComponent.color());
  /**
   * Set the custom style for this navbar item
   */
  public customStyle = model<DeepPartial<NavbarItemTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarItemClass {
    return this.themeService.getClasses({
      color: this.color(),
      customStyle: this.customStyle(),
    });
  }
  //#endregion

  /**
   * Toggle the nnavbar visibility (auto close when on mobile device)
   */
  public onClick(): void {
    this.navbarContentComponent.navbarComponent().toggleVisibility(false);
  }
}
