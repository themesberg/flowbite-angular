import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { DemoPageComponent } from '../../../../shared/components/demo-page/demo-page.component';
import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';
import * as examples from '../../../examples/breadcrumbs.example';

import { BreadcrumbComponent, BreadcrumbItemComponent } from 'flowbite-angular';

import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoPageComponent, DemoExampleComponent, BreadcrumbComponent, BreadcrumbItemComponent, ShikiComponent],
  selector: 'flowbite-breadcrumb-page',
  templateUrl: './breadcrumb-page.component.html',
})
export class BreadcrumbPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly examples = examples;
}
