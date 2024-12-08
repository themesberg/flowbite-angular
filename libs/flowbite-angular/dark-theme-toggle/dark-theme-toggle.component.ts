import type { DarkThemeToggleClass, DarkThemeToggleTheme } from './dark-theme-toggle.theme';
import { DarkThemeToggleThemeService } from './dark-theme-toggle.theme.service';

import type { DeepPartial, FlowbiteTheme } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { MOON_SVG_ICON, SUN_SVG_ICON } from 'flowbite-angular/utils';

import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

  //#region properties
  /**
   * Set the custom style for this dark-theme-toggle
   */
  public customStyle = model<DeepPartial<DarkThemeToggleTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): DarkThemeToggleClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    afterNextRender(
      () => {
        this.toggleTheme(this.getTheme());
      },
      { injector: this.injector }
    );

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
    this.toggleTheme();
  }

  /**
   * Get theme from the `localStorage`
   * @returns The current theme saved in the `localStorage` with the key `color-theme`
   */
  private getTheme(): FlowbiteTheme {
    return localStorage.getItem('color-theme') === 'dark' ? 'dark' : 'light';
  }

  /**
   * Toggle the theme saced in the `localStorage`
   *
   * @param theme If provided, force the theme instead of toggling it between light and dark mode
   */
  private toggleTheme(theme?: FlowbiteTheme): void {
    if (!theme) {
      const tmpTheme = this.getTheme();

      if (tmpTheme === 'dark') theme = 'light';
      else theme = 'dark';
    }

    this.setTheme(theme);
  }

  /**
   * Set the theme inside the page
   *
   * @param theme Theme to apply
   */
  private setTheme(theme: FlowbiteTheme): void {
    localStorage.setItem('color-theme', theme);

    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }
}
