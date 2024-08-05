import { FlowbiteIFrameWrapperComponent } from '../../../../../frames/iframe-wrapper.component';
import { BadgeExampleService } from '../../../../examples/badge.examples';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';

import { BadgeComponent } from 'flowbite-angular';

import { Component, HostBinding, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoExampleComponent, BadgeComponent, ShikiComponent, FlowbiteIFrameWrapperComponent],
  selector: 'flowbite-badge-page',
  templateUrl: './badge-page.component.html',
})
export class BadgePageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly exampleService = inject(BadgeExampleService);
}
