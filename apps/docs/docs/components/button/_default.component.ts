import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-default',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <flowbite-button>Default</flowbite-button>
    <flowbite-button color="dark">Dark</flowbite-button>
    <flowbite-button color="light">Light</flowbite-button>
    <flowbite-button color="green">Success</flowbite-button>
    <flowbite-button color="red">Failure</flowbite-button>
    <flowbite-button color="yellow">Warning</flowbite-button>
    <flowbite-button color="purple">Purple</flowbite-button>
  `,
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteDefaultComponent {}
