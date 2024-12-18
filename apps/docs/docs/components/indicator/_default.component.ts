import { IndicatorComponent } from 'flowbite-angular/indicator';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-indicator-default',
  imports: [IndicatorComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3 justify-around',
  },
})
export class FlowbiteDefaultComponent {}
