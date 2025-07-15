import { Component } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel.component';

@Component({
  selector: 'flowbite-accordion-title',
  template: ` <button
    class="flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400"
    [ngClass]="{
      'text-gray-900 dark:text-white': accordionPanel.open,
      'bg-gray-100 dark:bg-gray-800': accordionPanel.open && !accordion.flush,
      'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800':
        !accordion.flush
    }"
    type="button"
    (click)="accordionPanel.setOpen(!accordionPanel.open)"
  >
    <h2>
      <ng-content></ng-content>
    </h2>
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 20 20"
      class="h-6 w-6 shrink-0 duration-200"
      [class.rotate-180]="accordionPanel.open"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>`,
})
export class AccordionTitleComponent {
  constructor(
    readonly accordion: AccordionComponent,
    readonly accordionPanel: AccordionPanelComponent
  ) {}
}
