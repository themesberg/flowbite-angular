import { IndicatorComponent } from 'flowbite-angular/indicator';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-indicator-default',
  standalone: true,
  imports: [IndicatorComponent],
  template: `
    <flowbite-indicator />
    <flowbite-indicator color="dark" />
    <flowbite-indicator color="gray" />
    <flowbite-indicator color="blue" />
    <flowbite-indicator color="green" />
    <flowbite-indicator color="red" />
    <flowbite-indicator color="purple" />
    <flowbite-indicator color="indigo" />
    <flowbite-indicator color="yellow" />
    <flowbite-indicator color="teal" />
  `,
})
export class FlowbiteDefaultComponent {}
