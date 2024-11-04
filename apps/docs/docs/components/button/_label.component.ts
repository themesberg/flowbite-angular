import { BadgeComponent } from 'flowbite-angular/badge';
import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-label',
  standalone: true,
  imports: [ButtonComponent, BadgeComponent],
  template: `
    <flowbite-button>
      Messages
      <flowbite-badge
        [isIconOnly]="true"
        class="ml-2">
        2
      </flowbite-badge>
    </flowbite-button>
  `,
})
export class FlowbiteLabelComponent {}
