import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-pill',
  imports: [ButtonComponent],
  templateUrl: './_pill.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbitePillComponent {}
