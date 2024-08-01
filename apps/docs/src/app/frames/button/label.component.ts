import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { BadgeComponent, ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-label',
  standalone: true,
  imports: [ButtonComponent, BadgeComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-button>
        Messages
        <flowbite-badge
          isIconOnly
          class="ml-2"
          >2</flowbite-badge
        >
      </flowbite-button>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameButtonLabelComponent {}
