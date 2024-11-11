import { AlertComponent } from 'flowbite-angular/alert';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-alert-default',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex wrap flex-col gap-3',
  },
})
export class FlowbiteDefaultComponent {}
