import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-pill',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <flowbite-button
      [isPill]="true"
      color="dark">
      Dark
    </flowbite-button>
    <flowbite-button
      [isPill]="true"
      color="light">
      Light
    </flowbite-button>
    <flowbite-button
      [isPill]="true"
      color="green">
      Success
    </flowbite-button>
    <flowbite-button
      [isPill]="true"
      color="red">
      Failure
    </flowbite-button>
    <flowbite-button
      [isPill]="true"
      color="yellow">
      Warning
    </flowbite-button>
    <flowbite-button
      [isPill]="true"
      color="purple">
      Purple
    </flowbite-button>
  `,
})
export class FlowbitePillComponent {}
