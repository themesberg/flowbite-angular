import type { DeepPartial } from '../../common';
import { GlobalSignalStoreService } from '../../services';
import type { ThemeState } from '../../services/state/theme.state';
import { createClass } from '../../utils';
import { MOON_SVG_ICON, SUN_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { IconComponent, IconRegistry } from '../icon';
import type { DarkThemeToggleClass, DarkThemeToggleTheme } from './dark-theme-toggle.theme';
import { DarkThemeToggleThemeService } from './dark-theme-toggle.theme.service';

import { NgClass, NgIf } from '@angular/common';
import { afterNextRender, Component, effect, HostListener, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, IconComponent],
  selector: 'flowbite-dark-theme-toggle',
  template: `
    <flowbite-icon
      svgIcon="flowbite-angular:moon"
      class="h-5 w-5 hidden dark:block" />
    <flowbite-icon
      svgIcon="flowbite-angular:sun"
      class="h-5 w-5 block dark:hidden" />
  `,
})
export class DarkThemeToggleComponent extends BaseComponent {
  public readonly themeService = inject(DarkThemeToggleThemeService);
  public readonly themeStateService = inject<GlobalSignalStoreService<ThemeState>>(
    GlobalSignalStoreService<ThemeState>,
  );
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  public override contentClasses = signal<DarkThemeToggleClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<DarkThemeToggleTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'sun',
      this.domSanitizer.bypassSecurityTrustHtml(SUN_SVG_ICON),
    );
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'moon',
      this.domSanitizer.bypassSecurityTrustHtml(MOON_SVG_ICON),
    );

    afterNextRender(
      () => {
        const localStorageTheme = localStorage.getItem('color-theme');

        if (
          localStorageTheme === 'dark' ||
          (!localStorageTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          this.themeStateService.set('theme', 'dark');
          document.documentElement.classList.add('dark');
        } else {
          this.themeStateService.set('theme', 'light');
          document.documentElement.classList.remove('dark');
        }

        effect(
          () => {
            const theme = this.themeStateService.select('theme')();

            localStorage.setItem('color-theme', theme);
            theme === 'dark'
              ? document.documentElement.classList.add('dark')
              : document.documentElement.classList.remove('dark');
          },
          { injector: this.injector },
        );
      },
      { injector: this.injector },
    );
  }
  //#endregion

  @HostListener('click')
  public onClick() {
    if (this.themeStateService.select('theme')() === 'light') this.themeStateService.set('theme', 'dark');
    else this.themeStateService.set('theme', 'light');
  }
}
