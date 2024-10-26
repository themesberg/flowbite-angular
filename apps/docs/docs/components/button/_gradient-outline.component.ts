import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-gradient-outline',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <flowbite-button fill="outline" gradientDuoTone="purpleToBlue">
      Purple to Blue
    </flowbite-button>
    <flowbite-button fill="outline" gradientDuoTone="cyanToBlue"> Cyan to Blue </flowbite-button>
    <flowbite-button fill="outline" gradientDuoTone="greenToBlue"> Green to Blue </flowbite-button>
    <flowbite-button fill="outline" gradientDuoTone="purpleToPink">
      Purple to Pink
    </flowbite-button>
    <flowbite-button fill="outline" gradientDuoTone="pinkToOrange">
      Pink to Orange
    </flowbite-button>
    <flowbite-button fill="outline" gradientDuoTone="tealToLime"> Teal to Lime </flowbite-button>
    <flowbite-button fill="outline" gradientDuoTone="redToYellow"> Red to Yellow </flowbite-button>
  `,
})
export class FlowbiteGradientOutlineComponent {}
