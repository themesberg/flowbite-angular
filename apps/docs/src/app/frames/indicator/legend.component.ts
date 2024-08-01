import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-indicator-legend',
  standalone: true,
  imports: [IndicatorComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <span class="flex items-center"
        ><flowbite-indicator
          size="sm"
          class="mr-1.5"
          color="gray"></flowbite-indicator
        >Visitors</span
      >
      <span class="flex items-center"
        ><flowbite-indicator
          size="sm"
          class="mr-1.5"
          color="blue"></flowbite-indicator
        >Sessions</span
      >
      <span class="flex items-center"
        ><flowbite-indicator
          size="sm"
          class="mr-1.5"
          color="green"></flowbite-indicator
        >Customers</span
      >
      <span class="flex items-center"
        ><flowbite-indicator
          size="sm"
          class="mr-1.5"
          color="red"></flowbite-indicator
        >Revenue</span
      >
      <span class="flex items-center"
        ><flowbite-indicator
          size="sm"
          class="mr-1.5"
          color="purple"></flowbite-indicator
        >Revenue</span
      >
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameIndicatorLegendComponent {}
