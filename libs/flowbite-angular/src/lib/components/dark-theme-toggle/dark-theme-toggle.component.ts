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
  protected readonly globalSignalStoreService = inject<
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
        if (
          localStorage.getItem('color-theme') === 'dark' ||
          (!localStorage.getItem('color-theme') &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          this.globalSignalStoreService.set('theme', { theme: 'dark' });
          document.documentElement.classList.add('dark');
        } else {
          this.globalSignalStoreService.set('theme', { theme: 'dark' });
          document.documentElement.classList.remove('dark');
        }

        effect(
          () => {
            localStorage.setItem(
              'color-theme',
              this.globalSignalStoreService.select('theme')(),
            );
            this.globalSignalStoreService.select('theme')() === 'dark'
              ? document.documentElement.classList.add('dark')
              : document.documentElement.classList.remove('dark');
          },
          { injector: this.injector },
        );
      },
      { injector: this.injector },
    );
  }
}
