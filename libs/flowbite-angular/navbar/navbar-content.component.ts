import type { NavbarContentClass, NavbarContentTheme } from './navbar-content.theme';
import { NavbarContentThemeService } from './navbar-content.theme.service';
import { NavbarComponent } from './navbar.component';
import type { NavbarColors } from './navbar.theme';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_NAVBAR_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<NavbarContentTheme>
>('FLOWBITE_NAVBAR_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE');

export const navbarContentDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_NAVBAR_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/navbar/
 */
@Component({
  selector: 'flowbite-navbar-content',
  standalone: true,
  template: `
    <div [class]="contentClasses().navbarContentListClass">
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
  /**
   * Set the custom style for this navbar content
   */
  public customStyle = model(inject(FLOWBITE_NAVBAR_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE));
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
