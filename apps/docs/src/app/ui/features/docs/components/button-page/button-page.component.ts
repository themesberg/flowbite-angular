import { ButtonExampleService } from '../../../../examples/button.example';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';

import { Component, HostBinding, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoExampleComponent],
  selector: 'flowbite-button-page',
  templateUrl: './button-page.component.html',
})
export class ButtonPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly exampleService = inject(ButtonExampleService);
}
