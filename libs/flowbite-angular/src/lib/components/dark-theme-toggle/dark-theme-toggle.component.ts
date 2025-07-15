import { Component, OnDestroy, OnInit } from '@angular/core';

import { ThemeService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'flowbite-dark-theme-toggle',
  template: ` <button
    type="button"
    class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    (click)="themeService.toggleTheme()"
  >
    <svg
      *ngIf="themeService.$theme.getValue() === 'dark'"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 20 20"
      class="h-5 w-5"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <svg
      *ngIf="themeService.$theme.getValue() === 'light'"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 20 20"
      class="h-5 w-5"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      ></path>
    </svg>
  </button>`,
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
