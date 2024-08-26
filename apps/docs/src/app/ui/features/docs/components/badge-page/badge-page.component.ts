import { BadgeExampleService } from '../../../../examples/badge.examples';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { TableOfContentComponent } from '../../../../shared/components/table-of-content/table-of-content.component';
import { ThemeExampleComponent } from '../../../../shared/components/theme-example/theme-example.component';

import { Component, HostBinding, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoExampleComponent, ThemeExampleComponent, TableOfContentComponent],
  selector: 'flowbite-badge-page',
  templateUrl: './badge-page.component.html',
})
export class BadgePageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-row';

  protected readonly exampleService = inject(BadgeExampleService);
}
