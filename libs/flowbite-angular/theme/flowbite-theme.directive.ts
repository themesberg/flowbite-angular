import type { FlowbiteTheme } from 'flowbite-angular';

import type { OnInit } from '@angular/core';
import { afterNextRender, Directive, inject, Injector, signal, untracked } from '@angular/core';

/**
 * Use to give a clean API on the current application theme
 */
@Directive({
  standalone: true,
  selector: '[flowbiteTheme]',
})
export class FlowbiteThemeDirective implements OnInit {
  private readonly injector = inject(Injector);

  private readonly localStorageKey = 'color-theme';
  private readonly _currentTheme = signal<FlowbiteTheme>('light');

  public ngOnInit(): void {
    afterNextRender(
      () => {
        this.toggleTheme(this.getLocalStorageTheme());
      },
      { injector: this.injector }
    );
  }

  /**
   * Get the application theme based on `signals`
   */
  public readonly currentTheme = this._currentTheme.asReadonly();

  /**
   * Get theme from the `localStorage`
   *
   * @returns The current theme saved in the `localStorage` with the key `color-theme`
   */
  public getLocalStorageTheme(): FlowbiteTheme {
    return localStorage.getItem('color-theme') === 'dark' ? 'dark' : 'light';
  }

  /**
   * Toggle the theme saved in the `localStorage` and available in `currentTheme`
   *
   * @param theme If provided, force the theme instead of toggling it between light and dark mode
   */
  public toggleTheme(theme?: FlowbiteTheme): void {
    if (!theme) {
      const tmpTheme = untracked(() => this.currentTheme());

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
  public setTheme(theme: FlowbiteTheme): void {
    localStorage.setItem(this.localStorageKey, theme);
    this._currentTheme.set(theme);

    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }
}
