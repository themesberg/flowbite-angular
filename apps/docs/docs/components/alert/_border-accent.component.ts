import { AlertComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-alert-border-accent',
  standalone: true,
  imports: [AlertComponent],
  template: `
    <flowbite-alert
      hasBorderAccent
      color="primary"
      class="w-full">
      <span class="font-medium">Primary alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      hasBorderAccent
      color="dark"
      class="w-full">
      <span class="font-medium">Dark alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      hasBorderAccent
      color="blue"
      class="w-full">
      <span class="font-medium">blue alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      hasBorderAccent
      color="red"
      class="w-full">
      <span class="font-medium">red alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      hasBorderAccent
      color="green"
      class="w-full">
      <span class="font-medium">green alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert
      hasBorderAccent
      color="yellow"
      class="w-full">
      <span class="font-medium">yellow alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
  `,
})
export class FlowbiteBorderAccentComponent {}
