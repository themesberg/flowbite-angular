import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-disabled',
  imports: [ButtonComponent],
  templateUrl: './_disabled.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteDisabledComponent {}
