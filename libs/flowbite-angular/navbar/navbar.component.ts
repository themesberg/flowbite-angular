import { NavbarBrandComponent } from './navbar-brand.component';
import { NavbarContentComponent } from './navbar-content.component';
import { NavbarToggleComponent } from './navbar-toggle.component';
import type { NavbarClass, NavbarColors, NavbarTheme } from './navbar.theme';
import { NavbarThemeService } from './navbar.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  untracked,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_NAVBAR_COLOR_DEFAULT_VALUE = new InjectionToken<keyof NavbarColors>(
  'FLOWBITE_NAVBAR_COLOR_DEFAULT_VALUE'
);

export const FLOWBITE_NAVBAR_IS_OPEN_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_NAVBAR_IS_OPEN_DEFAULT_VALUE'
);

export const FLOWBITE_NAVBAR_IS_ROUNDED_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_NAVBAR_IS_ROUNDED_DEFAULT_VALUE'
);

export const FLOWBITE_NAVBAR_HAS_BORDER_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_NAVBAR_HAS_BORDER_DEFAULT_VALUE'
);

export const FLOWBITE_NAVBAR_IS_FIXED_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_NAVBAR_IS_FIXED_DEFAULT_VALUE'
);

export const FLOWBITE_NAVBAR_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<NavbarTheme>
>('FLOWBITE_NAVBAR_CUSTOM_STYLE_DEFAULT_VALUE');

export const navbarDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_NAVBAR_COLOR_DEFAULT_VALUE,
    useValue: 'primary',
  },
  {
    provide: FLOWBITE_NAVBAR_IS_OPEN_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_NAVBAR_IS_ROUNDED_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_NAVBAR_HAS_BORDER_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_NAVBAR_IS_FIXED_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_NAVBAR_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/navbar/
 */
@Component({
  standalone: true,
  selector: `
    flowbite-navbar,
    nav[flowbite-navbar]
  `,
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
  public readonly navbarContentChild = contentChild.required(NavbarContentComponent);

  //#region properties
  /**
   * Set the navbar color
   *
   * @default primary
   */
  public color = model(inject(FLOWBITE_NAVBAR_COLOR_DEFAULT_VALUE));
  /**
   * Set if the navbar is open
   *
   * @default false
   */
  public isOpen = model(inject(FLOWBITE_NAVBAR_IS_OPEN_DEFAULT_VALUE));
  /**
   * Set if the navbar is rounded
   *
   * @default false
   */
  public isRounded = model(inject(FLOWBITE_NAVBAR_IS_ROUNDED_DEFAULT_VALUE));
  /**
   * Set if the navbar has border
   *
   * @default false
   */
  public hasBorder = model(inject(FLOWBITE_NAVBAR_HAS_BORDER_DEFAULT_VALUE));
  /**
   * Set if the navbar is fixed
   *
   * @default false
   */
  public isFixed = model(inject(FLOWBITE_NAVBAR_IS_FIXED_DEFAULT_VALUE));
  /**
   * Set the custom style for this navbar
   */
  public customStyle = model(inject(FLOWBITE_NAVBAR_CUSTOM_STYLE_DEFAULT_VALUE));
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
