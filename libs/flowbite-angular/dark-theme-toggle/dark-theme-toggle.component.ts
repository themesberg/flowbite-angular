import type { DarkThemeToggleClass, DarkThemeToggleTheme } from './dark-theme-toggle.theme';
import { DarkThemeToggleThemeService } from './dark-theme-toggle.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { FlowbiteThemeDirective } from 'flowbite-angular/theme';
import { MOON_SVG_ICON, SUN_SVG_ICON } from 'flowbite-angular/utils';

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

export const FLOWBITE_DARK_THEME_TOGGLE_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<DarkThemeToggleTheme>
>('FLOWBITE_DARK_THEME_TOGGLE_CUSTOM_STYLE_DEFAULT_VALUE');

export const darkThemeToggleDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_DARK_THEME_TOGGLE_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * Use to toggle light/dark mode accross the site
 */
@Component({
  standalone: true,
  imports: [IconComponent],
  selector: 'flowbite-dark-theme-toggle',
  template: `
    <flowbite-icon
      svgIcon="flowbite-angular:moon"
      class="h-5 w-5 block dark:hidden" />
    <flowbite-icon
      svgIcon="flowbite-angular:sun"
      class="h-5 w-5 hidden dark:block" />
  `,
  host: {
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkThemeToggleComponent extends BaseComponent<DarkThemeToggleClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(DarkThemeToggleThemeService);
  /**
   * `IconRegistry` service
   */
  public readonly iconRegistry = inject(IconRegistry);
  /**
   * `DomSanitizer` service
   */
  public readonly domSanitizer = inject(DomSanitizer);
  /**
   * `FlowbiteThemeDirective` directive
   */
  public readonly themeDirective = inject(FlowbiteThemeDirective);

  //#region properties
  /**
   * Set the custom style for this dark-theme-toggle
   */
  public customStyle = model(inject(FLOWBITE_DARK_THEME_TOGGLE_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): DarkThemeToggleClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.themeDirective === undefined) {
      throw Error(
        "Please use FlowbiteThemeDirective on your top level `hostDirective`'s component"
      );
    }
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'sun',
      this.domSanitizer.bypassSecurityTrustHtml(SUN_SVG_ICON)
    );
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'moon',
      this.domSanitizer.bypassSecurityTrustHtml(MOON_SVG_ICON)
    );
  }
  //#endregion

  /**
   * Toggle between dark and light mode
   */
  public onClick() {
    this.themeDirective.toggleTheme();
  }
}
