import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-pill',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <flowbite-button
      isPill
      color="dark">
      Dark
    </flowbite-button>
    <flowbite-button
      isPill
      color="light">
      Light
    </flowbite-button>
    <flowbite-button
      isPill
      color="green">
      Success
    </flowbite-button>
    <flowbite-button
      isPill
      color="red">
      Failure
    </flowbite-button>
    <flowbite-button
      isPill
      color="yellow">
      Warning
    </flowbite-button>
    <flowbite-button
      isPill
      color="purple">
      Purple
    </flowbite-button>
  `,
})
export class FlowbitePillComponent {}
