import { IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-indicator-positioned',
  standalone: true,
  imports: [IndicatorComponent],
  template: `
    <div class="w-56 h-56 relative bg-gray-300 borer border-gray-500 rounded-lg dark:bg-gray-900 dark:border-gray-700">
      <flowbite-indicator
        [hasOffset]="true"
        placement="top-left"
        color="gray" />
      <flowbite-indicator
        [hasOffset]="true"
        placement="top-center"
        color="blue" />
      <flowbite-indicator
        [hasOffset]="true"
        placement="top-right"
        color="green" />
      <flowbite-indicator
        [hasOffset]="true"
        placement="center-left"
        color="red" />
      <flowbite-indicator
        [hasOffset]="true"
        placement="center"
        color="purple" />
      <flowbite-indicator
        [hasOffset]="true"
        placement="center-right"
        color="indigo" />
      <flowbite-indicator
        [hasOffset]="true"
        placement="bottom-left"
        color="yellow" />
      <flowbite-indicator
        [hasOffset]="true"
        placement="bottom-center"
        color="teal" />
      <flowbite-indicator
        [hasOffset]="true"
        placement="bottom-right"
        color="dark" />
    </div>
  `,
})
export class FlowbitePositionedComponent {}
