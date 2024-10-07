import {
  ButtonComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
} from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-modal-positioned',
  standalone: true,
  imports: [ModalComponent, ModalBodyComponent, ModalHeaderComponent, ModalFooterComponent, ButtonComponent],
  template: `
    <flowbite-button (click)="positionedModal.open()">Open modal</flowbite-button>
    <flowbite-modal
      #positionedModal
      dismissable
      position="top-right">
      <flowbite-modal-header>Terms of Service</flowbite-modal-header>
      <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
          companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
          ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
          possible of high-risk data breaches that affect them.
        </p>
      </flowbite-modal-body>
      <flowbite-modal-footer>
        <flowbite-button (click)="positionedModal.close()">Close</flowbite-button>
        <flowbite-button
          (click)="positionedModal.close()"
          color="light">
          I decline
        </flowbite-button>
      </flowbite-modal-footer>
    </flowbite-modal>
  `,
})
export class FlowbitePositionedComponent {}
