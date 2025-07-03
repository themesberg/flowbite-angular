import { Button } from 'flowbite-angular/button';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from 'flowbite-angular/modal';

import { Component } from '@angular/core';
import { NgpDialogTrigger } from 'ng-primitives/dialog';

@Component({
  imports: [Button, NgpDialogTrigger, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
