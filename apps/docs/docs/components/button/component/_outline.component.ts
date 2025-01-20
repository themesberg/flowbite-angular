import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-outline',
  imports: [ButtonComponent],
  templateUrl: './_outline.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteOutlineComponent {}
