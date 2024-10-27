import type { DarkThemeToggleClass, DarkThemeToggleTheme } from './dark-theme-toggle.theme';
import { DarkThemeToggleThemeService } from './dark-theme-toggle.theme.service';

import type { DeepPartial, FlowbiteTheme } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { MOON_SVG_ICON, SUN_SVG_ICON } from 'flowbite-angular/utils';

import { NgClass, NgIf } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, IconComponent],
  selector: 'flowbite-dark-theme-toggle',
  template: `
    <flowbite-icon svgIcon="flowbite-angular:moon" class="h-5 w-5 block dark:hidden" />
    <flowbite-icon svgIcon="flowbite-angular:sun" class="h-5 w-5 hidden dark:block" />
  `,
  host: {
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkThemeToggleComponent extends BaseComponent<DarkThemeToggleClass> {
  public readonly themeService = inject(DarkThemeToggleThemeService);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
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

  public onClick() {
    this.toggleTheme();
  }

  private getTheme(): FlowbiteTheme {
    return localStorage.getItem('color-theme') === 'dark' ? 'dark' : 'light';
  }

  private toggleTheme(theme?: FlowbiteTheme): void {
    if (!theme) {
      const tmpTheme = this.getTheme();

      if (tmpTheme === 'dark') theme = 'light';
      else theme = 'dark';
    }

    this.setTheme(theme);
  }

  private setTheme(theme: FlowbiteTheme): void {
    localStorage.setItem('color-theme', theme);

    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }
}
