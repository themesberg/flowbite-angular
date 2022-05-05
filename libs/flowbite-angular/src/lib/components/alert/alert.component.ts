import { Component, Input, TemplateRef } from '@angular/core';

export type AlertColor = 'blue' | 'red' | 'green' | 'yellow' | 'gray';

@Component({
  selector: 'flowbite-alert',
  template: ` <div
    class="flex flex-col gap-2 p-4 text-sm"
    [ngClass]="colorClasses[color]"
    [class.rounded-lg]="rounded"
    [class.border-t-4]="withBorderAccent"
    role="alert"
  >
    <div class="flex items-center">
      <ng-container [ngTemplateOutlet]="icon"></ng-container>
      <div>
        <ng-content></ng-content>
      </div>
      <button
        type="button"
        class="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2"
        [ngClass]="buttonColorClasses[color]"
        *ngIf="dismiss"
        aria-label="Close"
        (click)="dismiss?.()"
      >
        <span class="sr-only">Close</span>
        <svg
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
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <ng-container [ngTemplateOutlet]="additionalContent"></ng-container>
  </div>`,
})
export class AlertComponent {
  @Input() color: AlertColor = 'blue';
  @Input() rounded = true;
  @Input() withBorderAccent = false;
  @Input() icon: TemplateRef<unknown> | null = null;
  @Input() additionalContent: TemplateRef<unknown> | null = null;
  @Input() dismiss?: () => void;

  colorClasses: Record<AlertColor, string> = {
    blue: 'text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800',
    red: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
    green:
      'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
    yellow:
      'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
    gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
  };

  buttonColorClasses: Record<AlertColor, string> = {
    blue: 'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300',
    red: 'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300',
    green:
      'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300',
    yellow:
      'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300',
    gray: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
  };
}
