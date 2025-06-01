import { FlowbiteCardComponent, FlowbiteCardHeaderComponent } from 'flowbite-angular/card';

import { Component } from '@angular/core';

@Component({
  imports: [FlowbiteCardComponent, FlowbiteCardHeaderComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
