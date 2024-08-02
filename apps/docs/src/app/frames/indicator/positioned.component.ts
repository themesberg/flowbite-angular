import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-indicator-positioned',
  standalone: true,
  imports: [IndicatorComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <div
        class="w-56 h-56 relative bg-gray-300 borer border-gray-500 rounded-lg dark:bg-gray-900 dark:border-gray-700">
        <flowbite-indicator
          placement="top-left"
          color="gray" />
        <flowbite-indicator
          placement="top-center"
          color="blue" />
        <flowbite-indicator
          placement="top-right"
          color="green" />
        <flowbite-indicator
          placement="center-left"
          color="red" />
        <flowbite-indicator
          placement="center"
          color="purple" />
        <flowbite-indicator
          placement="center-right"
          color="indigo" />
        <flowbite-indicator
          placement="bottom-left"
          color="yellow" />
        <flowbite-indicator
          placement="bottom-center"
          color="teal" />
        <flowbite-indicator
          placement="bottom-right"
          color="dark" />
      </div>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameIndicatorPositionedComponent {}