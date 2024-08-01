import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-gradient-monochrome',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-button gradientMonochrome="info">Info</flowbite-button>
      <flowbite-button gradientMonochrome="success">Success</flowbite-button>
      <flowbite-button gradientMonochrome="cyan">Cyan</flowbite-button>
      <flowbite-button gradientMonochrome="teal">Teal</flowbite-button>
      <flowbite-button gradientMonochrome="lime">Lime</flowbite-button>
      <flowbite-button gradientMonochrome="failure">Failure</flowbite-button>
      <flowbite-button gradientMonochrome="pink">Pink</flowbite-button>
      <flowbite-button gradientMonochrome="purple">Purple</flowbite-button>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameButtonGradientMonochromeComponent {}
