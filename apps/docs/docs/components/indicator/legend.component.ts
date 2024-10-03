import { IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-indicator-legend',
  standalone: true,
  imports: [IndicatorComponent],
  template: `
    <span class="flex items-center">
      <flowbite-indicator
        size="sm"
        class="mr-1.5">
      </flowbite-indicator>
      Visitors
    </span>
    <span class="flex items-center">
      <flowbite-indicator
        size="sm"
        class="mr-1.5"
        color="blue">
      </flowbite-indicator>
      Sessions
    </span>
    <span class="flex items-center">
      <flowbite-indicator
        size="sm"
        class="mr-1.5"
        color="green">
      </flowbite-indicator>
      Customers
    </span>
    <span class="flex items-center">
      <flowbite-indicator
        size="sm"
        class="mr-1.5"
        color="dark">
      </flowbite-indicator>
      Revenue
    </span>
    <span class="flex items-center">
      <flowbite-indicator
        size="sm"
        class="mr-1.5"
        color="purple">
      </flowbite-indicator>
      Revenue
    </span>
  `,
})
export class FlowbiteLegendComponent {}
