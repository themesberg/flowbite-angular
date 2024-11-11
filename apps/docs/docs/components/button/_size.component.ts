import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-size',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './_size.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3 items-center',
  },
})
export class FlowbiteSizeComponent {}
