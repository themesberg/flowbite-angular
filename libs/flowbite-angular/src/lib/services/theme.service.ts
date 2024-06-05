import { FlowbiteTheme } from '../common/flowbite.theme';

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private $theme = signal<FlowbiteTheme>('light');

  public theme = this.$theme.asReadonly();

  public setTheme(value: FlowbiteTheme) {
    this.$theme.set(value);
  }

  public toggleTheme() {
    this.$theme.set(this.$theme() === 'dark' ? 'light' : 'dark');
  }
}
