import { IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-indicator-positioned',
  standalone: true,
  imports: [IndicatorComponent],
  template: `
    <div class="w-56 h-56 relative bg-gray-300 borer border-gray-500 rounded-lg dark:bg-gray-900 dark:border-gray-700">
      <flowbite-indicator
        hasOffset="top-left"
        placement="top-left"
        color="gray" />
      <flowbite-indicator
        hasOffset="top-center"
        placement="top-center"
        color="blue" />
      <flowbite-indicator
        hasOffset="top-right"
        placement="top-right"
        color="green" />
      <flowbite-indicator
        hasOffset="center-left"
        placement="center-left"
        color="red" />
      <flowbite-indicator
        hasOffset="center"
        placement="center"
        color="purple" />
      <flowbite-indicator
        hasOffset="center-right"
        placement="center-right"
        color="indigo" />
      <flowbite-indicator
        hasOffset="bottom-left"
        placement="bottom-left"
        color="yellow" />
      <flowbite-indicator
        hasOffset="bottom-center"
        placement="bottom-center"
        color="teal" />
      <flowbite-indicator
        hasOffset="bottom-right"
        placement="bottom-right"
        color="dark" />
    </div>
  `,
})
export class FlowbitePositionedComponent {}
