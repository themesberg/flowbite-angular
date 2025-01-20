import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-gradient-duotone',
  imports: [ButtonComponent],
  templateUrl: './_gradient-duotone.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteGradientDuotoneComponent {}
