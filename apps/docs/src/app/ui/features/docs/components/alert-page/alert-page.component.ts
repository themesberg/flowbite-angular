import { FlowbiteIFrameWrapperComponent } from '../../../../../frames/iframe-wrapper.component';
import * as examples from '../../../../examples/alert.example';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';

import { AlertComponent } from 'flowbite-angular';

import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoExampleComponent, AlertComponent, ShikiComponent, FlowbiteIFrameWrapperComponent],
  selector: 'flowbite-alert-page',
  templateUrl: './alert-page.component.html',
})
export class AlertPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly examples = examples;

  onDismiss = () => alert('Alert dismissed!');
}
