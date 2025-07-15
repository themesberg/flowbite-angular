import { Component } from '@angular/core';
import { AccordionPanelComponent } from './accordion-panel.component';

@Component({
  selector: 'flowbite-accordion-content',
  template: ` <div
    class="py-5 px-5 dark:bg-gray-900"
    *ngIf="accordionPanel.open"
  >
    <ng-content></ng-content>
  </div>`,
})
export class AccordionContentComponent {
  constructor(readonly accordionPanel: AccordionPanelComponent) {}
}
