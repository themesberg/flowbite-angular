import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-outline',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <flowbite-button fill="outline">Default</flowbite-button>
    <flowbite-button
      fill="outline"
      color="dark">
      Dark
    </flowbite-button>
    <flowbite-button
      fill="outline"
      color="green">
      Success
    </flowbite-button>
    <flowbite-button
      fill="outline"
      color="red">
      Failure
    </flowbite-button>
    <flowbite-button
      fill="outline"
      color="yellow">
      Warning
    </flowbite-button>
    <flowbite-button
      fill="outline"
      color="purple">
      Purple
    </flowbite-button>
  `,
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteOutlineComponent {}
