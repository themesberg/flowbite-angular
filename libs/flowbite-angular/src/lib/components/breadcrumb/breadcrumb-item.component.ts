import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'flowbite-breadcrumb-item',
  template: `
    <svg
      class="mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      ></path>
    </svg>

    <a
      *ngIf="href; else only_label"
      [href]="href"
      class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    >
      <ng-container *ngTemplateOutlet="contentOutlet"></ng-container>
    </a>

    <ng-template #only_label>
      <span
        class="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400"
      >
        <ng-container *ngTemplateOutlet="contentOutlet"></ng-container>
      </span>
    </ng-template>

    <ng-template #contentOutlet>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class BreadcrumbItemComponent {
  @Input() href?: string;
  @HostBinding('attr.class') hostClass = 'group flex items-center';
}
