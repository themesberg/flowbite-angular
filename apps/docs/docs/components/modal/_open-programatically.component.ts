import { Button } from 'flowbite-angular/button';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from 'flowbite-angular/modal';

import { Component, inject, TemplateRef, viewChild } from '@angular/core';
import { NgpDialogManager } from 'ng-primitives/dialog';

@Component({
  imports: [Button, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay],
  templateUrl: './_open-programatically.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteOpenprogramaticallyComponent {
  public readonly ngpDialogManager = inject(NgpDialogManager);
  public readonly modal = viewChild('dialog', { read: TemplateRef<unknown> });

  onClick(): void {
    const modal = this.modal();

    if (modal !== undefined) {
      this.ngpDialogManager.open(modal);
    }
  }
}
