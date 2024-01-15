import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  $theme = new BehaviorSubject<Theme>('light');

  setTheme(theme: Theme) {
    this.$theme.next(theme);
  }

  toggleTheme() {
    const theme = this.$theme.getValue();
    this.setTheme(theme === 'dark' ? 'light' : 'dark');
  }
}
