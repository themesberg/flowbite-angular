import { AlertExampleService } from '../../../../examples/alert.example';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';

import { Component, HostBinding, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoExampleComponent],
  selector: 'flowbite-alert-page',
  templateUrl: './alert-page.component.html',
})
export class AlertPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly exampleService = inject(AlertExampleService);

  onDismiss = () => alert('Alert dismissed!');
}
