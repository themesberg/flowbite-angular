import { FlowbiteButtonComponent, FlowbiteIconButtonDirective } from 'flowbite-angular/button';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { desktopPc, mobilePhone, tablet } from 'flowbite-angular/icon/outline/general';
import { moon, sun } from 'flowbite-angular/icon/outline/weather';
import { github } from 'flowbite-angular/icon/solid/brands';

import { Component, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  selector: 'flowbite-doc-demo',
  imports: [FlowbiteIconButtonDirective, FlowbiteButtonComponent, FlowbiteIconComponent],
  providers: [provideIcons({ github, desktopPc, tablet, mobilePhone, sun, moon })],
  template: `
    <div class="flex grow flex-col rounded-t-xl border border-gray-200 dark:border-gray-700">
      <div
        class="flex flex-row items-center justify-between rounded-t-xl border-b border-b-gray-200 bg-gray-50 p-6 dark:border-b-gray-700 dark:bg-gray-800 dark:text-gray-400">
        <span>
          <button
            flowbiteButton
            color="light"
            size="sm">
            <flowbite-icon
              flowbiteIconButton
              name="github" />
          </button>
        </span>
        <span class="hidden gap-2 lg:flex lg:flex-row">
          <button
            flowbiteButton
            disabled
            color="light"
            size="sm">
            <flowbite-icon
              flowbiteIconButton
              name="desktopPc" />
          </button>
          <button
            flowbiteButton
            disabled
            color="light"
            size="sm">
            <flowbite-icon
              flowbiteIconButton
              name="tablet" />
          </button>
          <button
            flowbiteButton
            disabled
            color="light"
            size="sm">
            <flowbite-icon
              flowbiteIconButton
              name="mobilePhone" />
          </button>
        </span>
        <span class="flex flex-row gap-2">
          <button
            flowbiteButton
            color="light"
            size="sm"
            (click)="themeMode.set('light')">
            <flowbite-icon
              flowbiteIconButton
              name="sun" />
          </button>
          <button
            flowbiteButton
            color="light"
            size="sm"
            (click)="themeMode.set('dark')">
            <flowbite-icon
              flowbiteIconButton
              name="moon" />
          </button>
        </span>
      </div>
      <div
        [attr.data-theme]="themeMode()"
        class="bg-white dark:bg-gray-900">
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
