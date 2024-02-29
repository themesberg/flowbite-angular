import * as properties from './theme';
import { BaseComponent } from '../base.component';

import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent extends BaseComponent implements OnInit {
  @Input() size: keyof properties.ModalSizes = 'md';
  @Input() position: keyof properties.ModalPositions = 'center';
  @Input() customStyle: Partial<properties.ModalBaseTheme> = {};

  @Input() dismissable?: boolean = false;
  @Input() isOpen?: boolean = false;

  ngOnInit(): void {
    const t = properties.getClasses({
      size: this.size,
      position: this.position,
      customStyle: this.customStyle,
    });

    this.componentClass = t.modalClass;
    this.contentClasses = {
      modalContainer: t.modalContainerClass,
      modalContent: t.modalContentClass,
    };
  }

  open() {
    this.isOpen = true;
    this.changeBackdrop();
  }

  close() {
    this.isOpen = false;
    this.changeBackdrop();
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.changeBackdrop();
  }

  // If isOpen changes, add or remove backdrop
  changeBackdrop() {
    if (this.isOpen) {
      const blurDiv = document.createElement('div');
      blurDiv.classList.add(
        'bg-gray-900',
        'bg-opacity-50',
        'dark:bg-opacity-80',
        'fixed',
        'inset-0',
        'z-40',
      );
      blurDiv.id = 'blurDiv';
      document.body.appendChild(blurDiv);
    } else {
      const blurDiv = document.getElementById('blurDiv');
      if (blurDiv) {
        document.body.removeChild(blurDiv);
      }
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent,
  ) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target == event.currentTarget && this.dismissable) {
      this.close();
    }
  }
}
