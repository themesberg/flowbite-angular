import { FlowbiteInputFieldComponent } from 'flowbite-angular/form';

import { Component } from '@angular/core';

@Component({
  imports: [FlowbiteInputFieldComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteDefaultComponent {}
