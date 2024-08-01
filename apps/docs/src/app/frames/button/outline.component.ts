import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-outline',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-button fill="outline">Default</flowbite-button>
      <flowbite-button
        fill="outline"
        color="dark"
        >Dark</flowbite-button
      >
      <flowbite-button
        fill="outline"
        color="success"
        >Success</flowbite-button
      >
      <flowbite-button
        fill="outline"
        color="failure"
        >Failure</flowbite-button
      >
      <flowbite-button
        fill="outline"
        color="warning"
        >Warning</flowbite-button
      >
      <flowbite-button
        fill="outline"
        color="purple"
        >Purple</flowbite-button
      >
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameButtonOutlineComponent {}
