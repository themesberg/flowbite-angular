import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-indicator-default',
  standalone: true,
  imports: [IndicatorComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-indicator />
      <flowbite-indicator color="gray" />
      <flowbite-indicator color="blue" />
      <flowbite-indicator color="green" />
      <flowbite-indicator color="red" />
      <flowbite-indicator color="purple" />
      <flowbite-indicator color="indigo" />
      <flowbite-indicator color="yellow" />
      <flowbite-indicator color="teal" />
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameIndicatorDefaultComponent {}
