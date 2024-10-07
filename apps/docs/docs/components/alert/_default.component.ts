import { AlertComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-alert-default',
  standalone: true,
  imports: [AlertComponent],
  template: `
    <flowbite-alert
      color="primary"
      class="w-full">
      <span class="font-medium">primary alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      color="dark"
      class="w-full">
      <span class="font-medium">Dark alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      color="blue"
      class="w-full">
      <span class="font-medium">blue alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      color="red"
      class="w-full">
      <span class="font-medium">red alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      color="green"
      class="w-full">
      <span class="font-medium">green alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      color="yellow"
      class="w-full">
      <span class="font-medium">yellow alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
  `,
})
export class FlowbiteDefaultComponent {}
