import { FlowbiteAlertComponent } from 'flowbite-angular/alert';

import { Component } from '@angular/core';

@Component({
  imports: [FlowbiteAlertComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex wrap flex-col gap-3',
  },
})
export class FlowbiteDefaultComponent {}
