import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  $theme = new BehaviorSubject<Theme>('light');

  setTheme(theme: Theme) {
    this.$theme.next(theme);
  }
}
