import type { FlowbiteTheme } from 'flowbite-angular';

import type { OnInit } from '@angular/core';
import { afterNextRender, Directive, inject, Injector } from '@angular/core';

/**
 * Use to give a clean API on the current application theme
 */
@Directive({
  standalone: true,
  selector: 'body[flowbiteTheme]',
})
export class FlowbiteThemeDirective implements OnInit {
  private readonly injector = inject(Injector);

  private readonly localStorageKey = 'color-theme';

  public ngOnInit(): void {
    afterNextRender(
      () => {
        this.toggleTheme(this.getTheme());
      },
      { injector: this.injector }
    );
  }

  /**
   * Get theme from the `localStorage`
   * @returns The current theme saved in the `localStorage` with the key `color-theme`
   */
  public getTheme(): FlowbiteTheme {
    return localStorage.getItem('color-theme') === 'dark' ? 'dark' : 'light';
  }

  /**
   * Toggle the theme saced in the `localStorage`
   *
   * @param theme If provided, force the theme instead of toggling it between light and dark mode
   */
  public toggleTheme(theme?: FlowbiteTheme): void {
    if (!theme) {
      const tmpTheme = this.getTheme();

      if (tmpTheme === 'dark') theme = 'dark';
      else theme = 'light';
    }

    this.setTheme(theme);
  }

  /**
   * Set the theme inside the page
   *
   * @param theme Theme to apply
   */
  public setTheme(theme: FlowbiteTheme): void {
    localStorage.setItem(this.localStorageKey, theme);

    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }
}
