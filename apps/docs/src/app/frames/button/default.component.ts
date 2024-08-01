import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-default',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-button>Default</flowbite-button>
      <flowbite-button color="gray">Gray</flowbite-button>
      <flowbite-button color="dark">Dark</flowbite-button>
      <flowbite-button color="light">Light</flowbite-button>
      <flowbite-button color="success">Success</flowbite-button>
      <flowbite-button color="failure">Failure</flowbite-button>
      <flowbite-button color="warning">Warning</flowbite-button>
      <flowbite-button color="purple">Purple</flowbite-button>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameButtonDefaultComponent {}
