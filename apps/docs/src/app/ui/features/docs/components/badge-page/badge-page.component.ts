import { BadgeExampleService } from '../../../../examples/badge.examples';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';

import { Component, HostBinding, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoExampleComponent],
  selector: 'flowbite-badge-page',
  templateUrl: './badge-page.component.html',
})
export class BadgePageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly exampleService = inject(BadgeExampleService);
}
