import { BreadcrumbExampleService } from '../../../../examples/breadcrumbs.example';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { ThemeExampleComponent } from '../../../../shared/components/theme-example/theme-example.component';

import { Component, HostBinding, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoExampleComponent, ThemeExampleComponent],
  selector: 'flowbite-breadcrumb-page',
  templateUrl: './breadcrumb-page.component.html',
})
export class BreadcrumbPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly exampleService = inject(BreadcrumbExampleService);
}
