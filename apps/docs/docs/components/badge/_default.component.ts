import { BadgeComponent } from 'flowbite-angular/badge';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-default',
  standalone: true,
  imports: [BadgeComponent],
  template: `
    <flowbite-badge>Default</flowbite-badge>
    <flowbite-badge color="primary">Primary</flowbite-badge>
    <flowbite-badge color="blue">Blue</flowbite-badge>
    <flowbite-badge color="red">Red</flowbite-badge>
    <flowbite-badge color="green">Green</flowbite-badge>
    <flowbite-badge color="yellow">Yellow</flowbite-badge>
    <flowbite-badge color="indigo">Indigo</flowbite-badge>
    <flowbite-badge color="purple">Purple</flowbite-badge>
    <flowbite-badge color="pink">Pink</flowbite-badge>
  `,
})
export class FlowbiteDefaultComponent {}
