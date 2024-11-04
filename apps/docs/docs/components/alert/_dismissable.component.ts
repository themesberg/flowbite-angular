import { AlertComponent } from 'flowbite-angular/alert';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-alert-dismissable',
  standalone: true,
  imports: [AlertComponent],
  template: `
    <flowbite-alert
      [isDismissable]="true"
      [onDismiss]="onDismiss"
      color="primary">
      <span class="font-medium">Primary alert !</span> Change a few things up and try submitting
      again.
    </flowbite-alert>
    <flowbite-alert
      [isDismissable]="true"
      [onDismiss]="onDismiss"
      color="dark">
      <span class="font-medium">Dark alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      [isDismissable]="true"
      [onDismiss]="onDismiss"
      color="blue">
      <span class="font-medium">blue alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      [isDismissable]="true"
      [onDismiss]="onDismiss"
      color="red">
      <span class="font-medium">red alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      [isDismissable]="true"
      [onDismiss]="onDismiss"
      color="green">
      <span class="font-medium">green alert !</span> Change a few things up and try submitting
      again.
    </flowbite-alert>
    <flowbite-alert
      [isDismissable]="true"
      [onDismiss]="onDismiss"
      color="yellow">
      <span class="font-medium">yellow alert !</span> Change a few things up and try submitting
      again.
    </flowbite-alert>
  `,
  host: {
    class: 'flex flex wrap flex-col gap-3',
  },
})
export class FlowbiteDismissableComponent {
  onDismiss = () => alert('Alert have been dismissed');
}
