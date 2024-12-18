import { IndicatorComponent } from 'flowbite-angular/indicator';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-indicator-legend',
  imports: [IndicatorComponent],
  templateUrl: './_legend.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteLegendComponent {}
