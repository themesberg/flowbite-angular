import { BehaviorSubject } from 'rxjs';
import { FlowbiteTheme } from '../../common/flowbite.theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  $theme = new BehaviorSubject<FlowbiteTheme>('light');

  setTheme(theme: FlowbiteTheme) {
    this.$theme.next(theme);
  }

  toggleTheme() {
    const theme = this.$theme.getValue();
    this.setTheme(theme === 'dark' ? 'light' : 'dark');
  }
}
