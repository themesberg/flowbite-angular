import {
  ButtonComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
} from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-modal-size',
  standalone: true,
  imports: [ModalComponent, ModalBodyComponent, ModalHeaderComponent, ModalFooterComponent, ButtonComponent],
  template: `
    <flowbite-button (click)="sizeSmallModal.open()">Small</flowbite-button>
    <flowbite-button (click)="sizeMediumModal.open()">Medium</flowbite-button>
    <flowbite-button (click)="sizeLargeModal.open()">Large</flowbite-button>
    <flowbite-button (click)="sizeExtraLargeModal.open()">Extra large</flowbite-button>
    <flowbite-modal
      #sizeSmallModal
      size="sm">
      <flowbite-modal-header>Terms of Service</flowbite-modal-header>
      <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
          companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
          ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
          possible of high-risk data breaches that could personally affect them.
        </p>
      </flowbite-modal-body>
      <flowbite-modal-footer>
        <flowbite-button (click)="sizeSmallModal.close()">I accept</flowbite-button>
        <flowbite-button
          (click)="sizeSmallModal.close()"
          color="light">
          I decline
        </flowbite-button>
      </flowbite-modal-footer>
    </flowbite-modal>
    <flowbite-modal
      #sizeMediumModal
      size="md">
      <flowbite-modal-header>Terms of Service</flowbite-modal-header>
      <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
          companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
          ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
          possible of high-risk data breaches that could personally affect them.
        </p>
      </flowbite-modal-body>
      <flowbite-modal-footer>
        <flowbite-button (click)="sizeMediumModal.close()">I accept</flowbite-button>
        <flowbite-button
          (click)="sizeMediumModal.close()"
          color="light">
          I decline
        </flowbite-button>
      </flowbite-modal-footer>
    </flowbite-modal>
    <flowbite-modal
      #sizeLargeModal
      size="lg">
      <flowbite-modal-header>Terms of Service</flowbite-modal-header>
      <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
          companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
          ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
          possible of high-risk data breaches that could personally affect them.
        </p>
      </flowbite-modal-body>
      <flowbite-modal-footer>
        <flowbite-button (click)="sizeLargeModal.close()">I accept</flowbite-button>
        <flowbite-button
          (click)="sizeLargeModal.close()"
          color="light">
          I decline
        </flowbite-button>
      </flowbite-modal-footer>
    </flowbite-modal>
    <flowbite-modal
      #sizeExtraLargeModal
      size="xl">
      <flowbite-modal-header>Terms of Service</flowbite-modal-header>
      <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
          companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
          ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
          possible of high-risk data breaches that could personally affect them.
        </p>
      </flowbite-modal-body>
      <flowbite-modal-footer>
        <flowbite-button (click)="sizeExtraLargeModal.close()">I accept</flowbite-button>
        <flowbite-button
          (click)="sizeExtraLargeModal.close()"
          color="light">
          I decline
        </flowbite-button>
      </flowbite-modal-footer>
    </flowbite-modal>
  `,
})
export class FlowbiteSizeComponent {}
