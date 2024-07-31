import * as examples from '../../../../examples/breadcrumbs.example';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';

import { BreadcrumbComponent, BreadcrumbItemComponent } from 'flowbite-angular';

import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoExampleComponent, BreadcrumbComponent, BreadcrumbItemComponent, ShikiComponent],
  selector: 'flowbite-breadcrumb-page',
  templateUrl: './breadcrumb-page.component.html',
})
export class BreadcrumbPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly examples = examples;
}
