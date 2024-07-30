import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { DemoPageComponent } from '../../../../shared/components/demo-page/demo-page.component';
import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';
import * as examples from '../../../examples/badge.examples';

import { BadgeComponent } from 'flowbite-angular';

import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoPageComponent, DemoExampleComponent, BadgeComponent, ShikiComponent],
  selector: 'flowbite-badge-page',
  templateUrl: './badge-page.component.html',
})
export class BadgePageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly examples = examples;
}
