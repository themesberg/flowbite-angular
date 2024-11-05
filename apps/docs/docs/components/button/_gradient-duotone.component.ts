import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-gradient-duotone',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <flowbite-button gradientDuoTone="purpleToBlue">Purple to Blue</flowbite-button>
    <flowbite-button gradientDuoTone="cyanToBlue">Cyan to Blue</flowbite-button>
    <flowbite-button gradientDuoTone="greenToBlue">Green to Blue</flowbite-button>
    <flowbite-button gradientDuoTone="purpleToPink">Purple to Pink</flowbite-button>
    <flowbite-button gradientDuoTone="pinkToOrange">Pink to Orange</flowbite-button>
    <flowbite-button gradientDuoTone="tealToLime">Teal to Lime</flowbite-button>
    <flowbite-button gradientDuoTone="redToYellow">Red to Yellow</flowbite-button>
  `,
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteGradientDuotoneComponent {}
