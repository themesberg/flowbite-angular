import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-size',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-button size="xs">Extra small</flowbite-button>
      <flowbite-button size="sm">Small</flowbite-button>
      <flowbite-button size="md">Base</flowbite-button>
      <flowbite-button size="lg">Large</flowbite-button>
      <flowbite-button size="xl">Extra large</flowbite-button>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameButtonSizeComponent {}
