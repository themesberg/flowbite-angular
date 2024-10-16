import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-gradient-monochrome',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <flowbite-button gradientMonochrome="blue">Info</flowbite-button>
    <flowbite-button gradientMonochrome="green">Success</flowbite-button>
    <flowbite-button gradientMonochrome="cyan">Cyan</flowbite-button>
    <flowbite-button gradientMonochrome="teal">Teal</flowbite-button>
    <flowbite-button gradientMonochrome="lime">Lime</flowbite-button>
    <flowbite-button gradientMonochrome="red">Failure</flowbite-button>
    <flowbite-button gradientMonochrome="pink">Pink</flowbite-button>
    <flowbite-button gradientMonochrome="purple">Purple</flowbite-button>
  `,
})
export class FlowbiteGradientMonochromeComponent {}
