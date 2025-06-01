import { FlowbiteButtonComponent } from 'flowbite-angular/button';
import { FlowbiteButtonGroupComponent } from 'flowbite-angular/button-group';

import { Component } from '@angular/core';

@Component({
  imports: [FlowbiteButtonComponent, FlowbiteButtonGroupComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteDefaultComponent {}
