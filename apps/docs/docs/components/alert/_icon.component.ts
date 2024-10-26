import { AlertComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-alert-icon',
  standalone: true,
  imports: [AlertComponent, IconComponent],
  template: `
    <flowbite-alert [icon]="icon" color="primary" class="w-full">
      <span class="font-medium">Primary alert !</span> Change a few things up and try submitting
      again.
    </flowbite-alert>
    <flowbite-alert [icon]="icon" color="dark" class="w-full">
      <span class="font-medium">Dark alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert [icon]="icon" color="blue" class="w-full">
      <span class="font-medium">blue alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert [icon]="icon" color="red" class="w-full">
      <span class="font-medium">red alert !</span> Change a few things up and try submitting again.
    </flowbite-alert>
    <flowbite-alert [icon]="icon" color="green" class="w-full">
      <span class="font-medium">green alert !</span> Change a few things up and try submitting
      again.
    </flowbite-alert>
    <flowbite-alert [icon]="icon" color="yellow" class="w-full">
      <span class="font-medium">yellow alert !</span> Change a few things up and try submitting
      again.
    </flowbite-alert>

    <ng-template #icon>
      <flowbite-icon svgIcon="outline:info-circle" class="mr-3 inline h-5 w-5 flex-shrink-0" />
    </ng-template>
  `,
})
export class FlowbiteIconComponent {}
