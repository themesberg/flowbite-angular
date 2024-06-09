import * as properties from './dark-theme-toggle.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import {
  AfterViewInit,
  Component,
  afterNextRender,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { GlobalSignalStoreService } from '../../services/global-signal-store.service';
import { NgClass, NgIf } from '@angular/common';
import { ThemeState } from '../../services/state/theme.state';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'flowbite-dark-theme-toggle',
  templateUrl: './dark-theme-toggle.component.html',
})
export class DarkThemeToggleComponent
  extends BaseComponent
  implements AfterViewInit
{
  protected readonly themeGlobalSignalStoreService = inject<
    GlobalSignalStoreService<ThemeState>
  >(GlobalSignalStoreService<ThemeState>);

  protected override contentClasses = signal<properties.DarkThemeToggleClass>(
    properties.DarkThemeToggleClassInstance(),
  );

  //#region properties
  public customStyle = input<Partial<properties.DarkThemeToggleBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull()) {
      const propertyClass = properties.getClasses({
        customStyle: this.customStyle(),
      });

      this.contentClasses.set(propertyClass);
    }
  }
  //#endregion

  public ngAfterViewInit(): void {
    afterNextRender(
      () => {
        const localStorageTheme = localStorage.getItem('color-theme');

        if (
          localStorageTheme === 'dark' ||
          (!localStorageTheme &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          this.themeGlobalSignalStoreService.set('theme', 'dark');
          document.documentElement.classList.add('dark');
        } else {
          this.themeGlobalSignalStoreService.set('theme', 'light');
          document.documentElement.classList.remove('dark');
        }

        effect(
          () => {
            const theme = this.themeGlobalSignalStoreService.select('theme')();

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

  protected toggleTheme() {
    if (this.themeGlobalSignalStoreService.select('theme')() === 'light')
      this.themeGlobalSignalStoreService.set('theme', 'dark');
    else this.themeGlobalSignalStoreService.set('theme', 'light');
  }
}
