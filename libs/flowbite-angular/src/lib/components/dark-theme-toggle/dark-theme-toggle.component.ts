import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

import { Subscription } from 'rxjs';
import { ThemeService } from '../../services';

@Component({
  standalone: true,
  imports: [NgIf],
  selector: 'flowbite-dark-theme-toggle',
  templateUrl: './dark-theme-toggle.component.html',
})
export class DarkThemeToggleComponent implements OnInit, OnDestroy {
  private themeSubscription: Subscription | undefined = undefined;

  constructor(readonly themeService: ThemeService) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        'matchMedia' in window &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.themeService.setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      this.themeService.setTheme('light');
      document.documentElement.classList.remove('dark');
    }

    this.themeSubscription = this.themeService.$theme
      .asObservable()
      .subscribe((theme) => {
        localStorage.setItem('color-theme', theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe();
  }
}
