import { FlowbiteButtonComponent } from 'flowbite-angular/button';
import { FlowbiteTooltipComponent } from 'flowbite-angular/tooltip';

import { Component, ElementRef, inject } from '@angular/core';
import { NgpTooltipTrigger } from 'ng-primitives/tooltip';

@Component({
  imports: [FlowbiteTooltipComponent, NgpTooltipTrigger, FlowbiteButtonComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'relative flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {
  readonly elementRef = inject(ElementRef);
}
