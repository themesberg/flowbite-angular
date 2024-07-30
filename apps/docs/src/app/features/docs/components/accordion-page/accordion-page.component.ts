import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { DemoPageComponent } from '../../../../shared/components/demo-page/demo-page.component';
import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';
import * as examples from '../../../examples/accordion.example';

import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
} from 'flowbite-angular';

import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    DemoPageComponent,
    DemoExampleComponent,
    AccordionComponent,
    AccordionPanelComponent,
    AccordionTitleComponent,
    AccordionContentComponent,
    ShikiComponent,
  ],
  selector: 'flowbite-accordion-page',
  templateUrl: './accordion-page.component.html',
})
export class AccordionPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly examples = examples;
}
