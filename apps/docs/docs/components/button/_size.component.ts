import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-size',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <flowbite-button size="xs">Extra small</flowbite-button>
    <flowbite-button size="sm">Small</flowbite-button>
    <flowbite-button size="md">Base</flowbite-button>
    <flowbite-button size="lg">Large</flowbite-button>
    <flowbite-button size="xl">Extra large</flowbite-button>
  `,
})
export class FlowbiteSizeComponent {}
