import { ThemeService } from '../../services';

import {
  Component,
  Injector,
  OnInit,
  afterNextRender,
  effect,
  inject,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf],
  selector: 'flowbite-dark-theme-toggle',
  templateUrl: './dark-theme-toggle.component.html',
})
export class DarkThemeToggleComponent implements OnInit {
  protected readonly injector = inject(Injector);
  protected readonly themeService = inject(ThemeService);

  public ngOnInit() {
    afterNextRender(
      () => {
        if (
          localStorage.getItem('color-theme') === 'dark' ||
          (!localStorage.getItem('color-theme') &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          this.themeService.setTheme('dark');
          document.documentElement.classList.add('dark');
        } else {
          this.themeService.setTheme('light');
          document.documentElement.classList.remove('dark');
        }

        effect(
          () => {
            localStorage.setItem('color-theme', this.themeService.theme());
            this.themeService.theme() === 'dark'
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
