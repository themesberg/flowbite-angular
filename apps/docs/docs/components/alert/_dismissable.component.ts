import { AlertComponent } from 'flowbite-angular/alert';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-alert-dismissable',
  imports: [AlertComponent],
  templateUrl: './_dismissable.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3',
  },
})
export class FlowbiteDismissableComponent {
  onDismiss = () => alert('Alert have been dismissed');
}
