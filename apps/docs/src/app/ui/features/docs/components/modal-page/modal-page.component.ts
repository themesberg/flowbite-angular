import { FlowbiteIFrameWrapperComponent } from '../../../../../frames/iframe-wrapper.component';
import { ModalExampleService } from '../../../../examples/modal.example';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';

import {
  ButtonComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
} from 'flowbite-angular';

import { Component, HostBinding, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    DemoExampleComponent,
    ButtonComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ShikiComponent,
    FlowbiteIFrameWrapperComponent,
  ],
  selector: 'flowbite-modal-page',
  templateUrl: './modal-page.component.html',
})
export class ModalPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly exampleService = inject(ModalExampleService);
}
