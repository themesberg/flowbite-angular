import { BadgeComponent } from 'flowbite-angular/badge';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-large',
  standalone: true,
  imports: [BadgeComponent],
  template: `
    <flowbite-badge size="sm">Default</flowbite-badge>
    <flowbite-badge color="primary" size="sm"> Primary </flowbite-badge>
    <flowbite-badge color="blue" size="sm"> Blue </flowbite-badge>
    <flowbite-badge color="red" size="sm"> Red </flowbite-badge>
    <flowbite-badge color="green" size="sm"> Green </flowbite-badge>
    <flowbite-badge color="yellow" size="sm"> Yellow </flowbite-badge>
    <flowbite-badge color="indigo" size="sm"> Indigo </flowbite-badge>
    <flowbite-badge color="purple" size="sm"> Purple </flowbite-badge>
    <flowbite-badge color="pink" size="sm"> Pink </flowbite-badge>
  `,
})
export class FlowbiteLargeComponent {}
