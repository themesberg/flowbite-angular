import type { DeepPartial } from '../../common';
import { GlobalSignalStoreService } from '../../services';
import type { ThemeState } from '../../services/state/theme.state';
import { BaseComponent } from '../base.component';
import * as properties from './dark-theme-toggle.theme';
import { DarkThemeToggleThemeService } from './dark-theme-toggle.theme.service';

import { NgClass, NgIf } from '@angular/common';
import type { AfterViewInit } from '@angular/core';
import { afterNextRender, Component, effect, HostListener, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'flowbite-dark-theme-toggle',
  templateUrl: './dark-theme-toggle.component.html',
})
export class DarkThemeToggleComponent extends BaseComponent implements AfterViewInit {
  protected override contentClasses = signal<properties.DarkThemeToggleClass>(properties.DarkThemeToggleClassInstance);

  protected readonly themeService = inject(DarkThemeToggleThemeService);
  protected readonly themeStateService = inject<GlobalSignalStoreService<ThemeState>>(
    GlobalSignalStoreService<ThemeState>,
  );

  //#region properties
  public customStyle = input<DeepPartial<properties.DarkThemeToggleBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public ngAfterViewInit(): void {
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

  @HostListener('click')
  protected onClick() {
    if (this.themeStateService.select('theme')() === 'light') this.themeStateService.set('theme', 'dark');
    else this.themeStateService.set('theme', 'light');
  }
}
