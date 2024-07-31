import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { BadgeComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-badge-large',
  standalone: true,
  imports: [BadgeComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-badge size="sm">Default</flowbite-badge>
      <flowbite-badge
        color="dark"
        size="sm">
        Dark
      </flowbite-badge>
      <flowbite-badge
        color="red"
        size="sm">
        Red
      </flowbite-badge>
      <flowbite-badge
        color="green"
        size="sm">
        Green
      </flowbite-badge>
      <flowbite-badge
        color="yellow"
        size="sm">
        Yellow
      </flowbite-badge>
      <flowbite-badge
        color="indigo"
        size="sm">
        Indigo
      </flowbite-badge>
      <flowbite-badge
        color="purple"
        size="sm">
        Purple
      </flowbite-badge>
      <flowbite-badge
        color="pink"
        size="sm">
        Pink
      </flowbite-badge>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameBadgeLargeComponent {}
