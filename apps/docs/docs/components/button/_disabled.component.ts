import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-disabled',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <flowbite-button [isDisabled]="true">Disabled button</flowbite-button>
    <flowbite-button
      color="blue"
      [isDisabled]="true">
      Disabled button
    </flowbite-button>
  `,
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteDisabledComponent {}
