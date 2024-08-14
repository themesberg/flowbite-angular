import { AccordionExampleService } from '../../../../examples/accordion.example';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';

import { Component, HostBinding, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoExampleComponent],
  selector: 'flowbite-accordion-page',
  templateUrl: './accordion-page.component.html',
})
export class AccordionPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly exampleService = inject(AccordionExampleService);
}
