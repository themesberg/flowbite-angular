import { injectFlowbiteThemeConfig } from '../config/theme-config';
import { flowbiteThemeState, provideFlowbiteThemeState } from './theme-state';

import type { FlowbiteTheme } from 'flowbite-angular';

import { afterNextRender, Directive, input, untracked } from '@angular/core';

@Directive({
  standalone: true,
  selector: `
    [flowbiteTheme]
  `,
  exportAs: 'flowbiteTheme',
  hostDirectives: [],
  providers: [provideFlowbiteThemeState()],
  host: {},
})
export class FlowbiteThemeDirective {
  protected readonly config = injectFlowbiteThemeConfig();

  readonly localStorageKey = input<string>(this.config.localStorageKey);
  readonly currentTheme = input<FlowbiteTheme>(this.config.theme);
  readonly type = input<{ type: 'class' } | { type: 'attr'; name: string }>(this.config.type);

  constructor() {
    afterNextRender(() => {
      this.toggleTheme(this.getLocalStorageTheme());
    });
  }

  getLocalStorageTheme(): FlowbiteTheme | undefined {
    const localStorageValue = localStorage.getItem(this.state.localStorageKey());

    if (
      localStorageValue === undefined ||
      (localStorageValue !== 'light' && localStorageValue !== 'dark')
    ) {
      return undefined;
    }

    return localStorageValue;
  }

  toggleTheme(theme?: FlowbiteTheme): void {
    if (!theme) {
      theme = untracked(() => (this.state.currentTheme() === 'light' ? 'dark' : 'light'));
    }

    this.setTheme(theme);
  }

  setTheme(theme: FlowbiteTheme): void {
    try {
      localStorage.setItem(this.state.localStorageKey(), theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }

    this.state.currentTheme.set(theme);

    const type = untracked(() => this.state.type());

    if (type.type === 'class') {
      theme === 'light'
        ? document.documentElement.classList.remove('dark')
        : document.documentElement.classList.add('dark');
    } else if (type.type === 'attr') {
      document.documentElement.setAttribute(type.name, theme);
    }
  }

  /**
   * @internal
   */
  readonly state = flowbiteThemeState<FlowbiteThemeDirective>(this);
}
