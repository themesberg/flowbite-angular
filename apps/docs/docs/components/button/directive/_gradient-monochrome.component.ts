import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-gradient-monochrome',
  imports: [ButtonComponent],
  templateUrl: './_gradient-monochrome.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteGradientMonochromeComponent {}
