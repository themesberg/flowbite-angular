import { Button } from 'flowbite-angular/button';
import { Tooltip } from 'flowbite-angular/tooltip';

import { Component, ElementRef, inject } from '@angular/core';
import { NgpTooltipTrigger } from 'ng-primitives/tooltip';

@Component({
  imports: [Button, NgpTooltipTrigger, Tooltip],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {
  readonly elementRef = inject(ElementRef);
}
