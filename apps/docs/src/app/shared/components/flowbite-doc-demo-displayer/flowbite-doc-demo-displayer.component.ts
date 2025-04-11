import { ButtonComponent } from 'flowbite-angular/button';
import { IconComponent } from 'flowbite-angular/icon';

import { Component, signal } from '@angular/core';

@Component({
  selector: 'flowbite-doc-demo',
  imports: [ButtonComponent, IconComponent],
  template: `
    <div class="flex grow flex-col rounded-t-xl border border-gray-200 dark:border-gray-700">
      <div
        class="flex flex-row items-center justify-between rounded-t-xl border-b border-b-gray-200 bg-gray-50 p-6 dark:border-b-gray-700 dark:bg-gray-800 dark:text-gray-400">
        <span>
          <flowbite-button
            [isDisabled]="true"
            color="light"
            size="sm">
            <flowbite-icon
              svgIcon="solid:github"
              class="mr-2 h-4 w-4" />
            Show on Github
          </flowbite-button>
        </span>
        <span class="hidden gap-2 lg:flex lg:flex-row">
          <flowbite-button
            [isDisabled]="true"
            color="light"
            size="sm"
            [isPill]="true">
            <flowbite-icon
              svgIcon="outline:desktop-pc"
              class="h-4 w-4" />
          </flowbite-button>
          <flowbite-button
            [isDisabled]="true"
            color="light"
            size="sm"
            [isPill]="true">
            <flowbite-icon
              svgIcon="outline:tablet"
              class="h-4 w-4" />
          </flowbite-button>
          <flowbite-button
            [isDisabled]="true"
            color="light"
            size="sm"
            [isPill]="true">
            <flowbite-icon
              svgIcon="outline:mobile-phone"
              class="h-4 w-4" />
          </flowbite-button>
        </span>
        <span class="flex flex-row gap-2">
          <flowbite-button
            color="light"
            size="sm"
            [isPill]="true"
            (click)="themeMode.set('light')">
            <flowbite-icon
              svgIcon="outline:sun"
              class="h-5 w-5" />
          </flowbite-button>
          <flowbite-button
            color="light"
            size="sm"
            [isPill]="true"
            (click)="themeMode.set('dark')">
            <flowbite-icon
              svgIcon="outline:moon"
              class="h-5 w-5" />
          </flowbite-button>
        </span>
      </div>
      <div
        [attr.data-theme]="themeMode()"
        class="bg-white p-6 dark:bg-gray-900">
        <ng-content />
      </div>
    </div>
  `,
  styles: `
    ng-doc-demo {
      margin: 0px;
    }
  `,
})
export class FlowbiteDocDemoComponent {
  public themeMode = signal<string>('light');
}
