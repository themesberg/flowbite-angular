import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-gradient-outline',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './_gradient-outline.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteGradientOutlineComponent {}
