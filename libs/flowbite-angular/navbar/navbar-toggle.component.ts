import type { NavbarToggleClass, NavbarToggleTheme } from './navbar-toggle.theme';
import { NavbarToggleThemeService } from './navbar-toggle.theme.service';
import { NavbarComponent } from './navbar.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { BARS_SVG_ICON } from 'flowbite-angular/utils';

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export const FLOWBITE_NAVBAR_TOGGLE_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<NavbarToggleTheme>
>('FLOWBITE_NAVBAR_TOGGLE_CUSTOM_STYLE_DEFAULT_VALUE');

export const navbarToggleDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_NAVBAR_TOGGLE_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/navbar/
 */
@Component({
  selector: 'flowbite-navbar-toggle',
  standalone: true,
  imports: [IconComponent],
  template: `
    <flowbite-icon
      svgIcon="flowbite-angular:bars"
      class="w-5 h-5" />
  `,
  host: {
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarToggleComponent extends BaseComponent<NavbarToggleClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(NavbarToggleThemeService);
  /**
   * The parent `NavbarComponent`
   */
  public readonly navbarComponent = model(inject(NavbarComponent));
  /**
   * `IconRegistry` service
   */
  public readonly iconRegistry = inject(IconRegistry);
  /**
   * `DomSanitizer` service
   */
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  /**
   * Set the custom style for this navbar toggle
   */
  public customStyle = model(inject(FLOWBITE_NAVBAR_TOGGLE_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarToggleClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'bars',
      this.domSanitizer.bypassSecurityTrustHtml(BARS_SVG_ICON)
    );
  }
  //#endregion

  /**
   * Toggle navbar visibility (open close on mobile device)
   */
  public onClick(): void {
    const isCollapsed = this.navbarComponent().isOpen();

    this.navbarComponent().isOpen.set(!isCollapsed);
  }
}
