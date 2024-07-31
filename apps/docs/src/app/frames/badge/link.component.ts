import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { BadgeComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-badge-link',
  standalone: true,
  imports: [BadgeComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-badge>Default</flowbite-badge>
      <flowbite-badge color="dark">Dark</flowbite-badge>
      <flowbite-badge color="red">Red</flowbite-badge>
      <flowbite-badge color="green">Green</flowbite-badge>
      <flowbite-badge color="yellow">Yellow</flowbite-badge>
      <flowbite-badge color="indigo">Indigo</flowbite-badge>
      <flowbite-badge color="purple">Purple</flowbite-badge>
      <flowbite-badge color="pink">Pink</flowbite-badge>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameBadgeLinkComponent {}
