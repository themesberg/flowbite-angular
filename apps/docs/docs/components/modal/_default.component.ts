import { ButtonComponent } from 'flowbite-angular/button';
import {
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
} from 'flowbite-angular/modal';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-modal-default',
  standalone: true,
  imports: [
    ModalComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    ButtonComponent,
  ],
  template: `
    <flowbite-button (click)="default_modal.open()">Default modal</flowbite-button>
    <flowbite-modal #default_modal>
      <flowbite-modal-header>Terms of Service</flowbite-modal-header>
      <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400 items-start justify-end">
          With less than a month to go before the European Union enacts new consumer privacy laws
          for its citizens, companies around the world are updating their terms of service
          agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
          25 and is meant to ensure a common set of data rights in the European Union. It requires
          organizations to notify users as soon as possible of high-risk data breaches that could
          personally affect them.
        </p>
      </flowbite-modal-body>
      <flowbite-modal-footer>
        <flowbite-button (click)="default_modal.close()">I accept</flowbite-button>
        <flowbite-button
          (click)="default_modal.close()"
          color="light">
          I decline
        </flowbite-button>
      </flowbite-modal-footer>
    </flowbite-modal>
  `,
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteDefaultComponent {}
