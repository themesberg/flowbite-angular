import type { TableOfContent } from '../../models/table-of-content';

import { NgTemplateOutlet } from '@angular/common';
import { Component, HostBinding, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'flowbite-table-of-content-item',
  imports: [RouterLink, RouterLinkActive, NgTemplateOutlet],
  template: `
    <ul class="flex flex-col gap-3">
      @if (data().children) {
        <li
          class="px-2 py-1 text-base font-normal cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:border-l border-gray-800 dark:border-white aria-current:text-primary-500 aria-current:border-primary-500">
          <ng-container [ngTemplateOutlet]="content" />
        </li>
      } @else {
        <li
          class="px-2 py-1 text-base font-normal cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:border-l border-gray-800 dark:border-white aria-current:text-primary-500 aria-current:border-primary-500"
          routerLink="."
          [fragment]="data().fragmentName"
          routerLinkActive="active"
          [ariaCurrentWhenActive]="true"
          [routerLinkActiveOptions]="{
            matrixParams: 'exact',
            queryParams: 'exact',
            paths: 'exact',
            fragment: 'exact',
          }">
          <ng-container [ngTemplateOutlet]="content" />
        </li>
      }
    </ul>

    <ng-template #content>
      {{ data().fragmentName }}
      @if (data().children) {
        @for (item of data().children; track $index) {
          <flowbite-table-of-content-item [data]="item" />
        }
      }
    </ng-template>
  `,
})
export class TableOfContentItemComponent {
  public data = input.required<TableOfContent>();
}

@Component({
  standalone: true,
  selector: 'flowbite-table-of-content',
  imports: [TableOfContentItemComponent],
  template: `
    <h4 class="text-base font-semibold leading-normal text-gray-900 dark:text-white">ON THIS PAGE</h4>
    <div class="flex flex-col justify-between">
      <nav class="mt-6">
        @for (item of data(); track $index) {
          <flowbite-table-of-content-item [data]="item" />
        }
      </nav>
    </div>
  `,
})
export class TableOfContentComponent {
  @HostBinding('id') hostId = 'table-of-content';
  @HostBinding('class') hostClass = 'hidden xl:block w-1/6 ml-4 overflow-y-auto sticky top-28 h-[calc(100vh-7rem)]';

  public data = input.required<TableOfContent[]>();
}
