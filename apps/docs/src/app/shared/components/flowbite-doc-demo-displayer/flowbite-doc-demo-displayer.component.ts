import { ButtonComponent } from 'flowbite-angular/button';
import { IconComponent } from 'flowbite-angular/icon';

import { Component, signal } from '@angular/core';

@Component({
  selector: 'flowbite-doc-demo',
  imports: [ButtonComponent, IconComponent],
  template: `
    <div class="flex flex-col grow rounded-t-xl border border-gray-200 dark:border-gray-700">
      <div
        class="flex flex-row justify-between items-center rounded-t-xl p-6 border-b border-b-gray-200 dark:border-b-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
        <span>
          <flowbite-button
            [isDisabled]="true"
            color="light"
            size="sm">
            <flowbite-icon
              svgIcon="solid:github"
              class="mr-2 w-4 h-4" />
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
              class="w-4 h-4" />
          </flowbite-button>
          <flowbite-button
            [isDisabled]="true"
            color="light"
            size="sm"
            [isPill]="true">
            <flowbite-icon
              svgIcon="outline:tablet"
              class="w-4 h-4" />
          </flowbite-button>
          <flowbite-button
            [isDisabled]="true"
            color="light"
            size="sm"
            [isPill]="true">
            <flowbite-icon
              svgIcon="outline:mobile-phone"
              class="w-4 h-4" />
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
              class="w-5 h-5" />
          </flowbite-button>
          <flowbite-button
            color="light"
            size="sm"
            [isPill]="true"
            (click)="themeMode.set('dark')">
            <flowbite-icon
              svgIcon="outline:moon"
              class="w-5 h-5" />
          </flowbite-button>
        </span>
      </div>
      <div
        [attr.data-theme]="themeMode()"
        class="p-6 bg-white dark:bg-gray-900">
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
