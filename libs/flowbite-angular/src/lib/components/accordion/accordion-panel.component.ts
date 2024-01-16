import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-accordion-panel',
  templateUrl: './accordion-panel.component.html',
})
export class AccordionPanelComponent {
  @Input() open?: boolean;

  setOpen(open: boolean) {
    this.open = open;
  }
}
