import { BadgeComponent } from 'flowbite-angular/badge';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-dismissable',
  imports: [BadgeComponent],
  templateUrl: './_dismissable.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteDismissableComponent {
  onDismiss = () => alert('Badge have been dismissed');
}
