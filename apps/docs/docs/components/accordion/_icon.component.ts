import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
} from 'flowbite-angular/accordion';
import { Icon } from 'flowbite-angular/icon';
import { chevronDown } from 'flowbite-angular/icon/outline/arrows';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [Accordion, AccordionItem, AccordionTitle, AccordionContent, Icon],
  providers: [provideIcons({ chevronDown })],
  templateUrl: './_icon.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteIconComponent {}
