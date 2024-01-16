import { Component, Input, TemplateRef } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

export type AlertColor = 'blue' | 'red' | 'green' | 'yellow' | 'gray';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  @Input() color: AlertColor = 'blue';
  @Input() rounded = true;
  @Input() withBorderAccent = false;
  @Input() icon: TemplateRef<unknown> | null = null;
  @Input() additionalContent: TemplateRef<unknown> | null = null;
  @Input() dismiss!: () => void;

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
