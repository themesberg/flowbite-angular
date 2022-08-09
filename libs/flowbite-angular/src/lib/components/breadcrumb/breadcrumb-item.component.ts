import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'flowbite-breadcrumb-item',
  template: `
    <div class="flex items-center">
      <svg
        class="h-6 w-6 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        *ngIf="!isRoot"
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
        class="ml-1 flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:ml-2"
      >
        <ng-container *ngTemplateOutlet="contentOutlet"></ng-container>
      </a>

      <ng-template #only_label>
        <span
          class="ml-1 flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2"
        >
          <ng-container *ngTemplateOutlet="contentOutlet"></ng-container>
        </span>
      </ng-template>

      <ng-template #contentOutlet>
        <ng-content></ng-content>
      </ng-template>
    </div>
  `,
})
export class BreadcrumbItemComponent {
  @Input() href?: string;
  isRoot = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  setAsRoot() {
    this.isRoot = true;
    this.cdRef.detectChanges();
  }
}
