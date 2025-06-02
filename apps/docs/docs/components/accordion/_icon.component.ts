import {
  FlowbiteAccordionDirective,
  FlowbiteAccordionItemDirective,
} from 'flowbite-angular/accordion';
import { FlowbiteIconComponent as fic } from 'flowbite-angular/icon';
import { chevronDown } from 'flowbite-angular/icon/outline/arrows';

import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [FlowbiteAccordionDirective, FlowbiteAccordionItemDirective, fic, NgClass],
  providers: [provideIcons({ chevronDown })],
  templateUrl: './_icon.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteIconComponent {}
