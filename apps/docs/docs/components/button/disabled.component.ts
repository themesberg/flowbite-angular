import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-disabled',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <flowbite-button isDisabled>Disabled button</flowbite-button>
    <flowbite-button
      color="blue"
      isDisabled>
      Disabled button
    </flowbite-button>
  `,
})
export class FlowbiteDisabledComponent {}
