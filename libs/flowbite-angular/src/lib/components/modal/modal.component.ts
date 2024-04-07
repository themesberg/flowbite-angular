import * as properties from './modal.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, HostListener, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent extends BaseComponent {
  //#region properties
  protected $size: keyof properties.ModalSizes = 'md';
  protected $position: keyof properties.ModalPositions = 'center';
  protected $dismissable: boolean = false;
  protected $isOpen: boolean = false;
  protected $customStyle: Partial<properties.ModalBaseTheme> = {};
  //#endregion
  //#region getter/setter
  public get size(): keyof properties.ModalSizes {
    return this.$size;
  }
  @Input() public set size(value: keyof properties.ModalSizes) {
    this.$size = value;
    this.fetchClass();
  }

  public get position(): keyof properties.ModalPositions {
    return this.$position;
  }
  @Input() public set position(value: keyof properties.ModalPositions) {
    this.$position = value;
    this.fetchClass();
  }

  public get dismissable(): boolean {
    return this.$dismissable;
  }
  @Input() public set dismissable(value: boolean) {
    this.$dismissable = value;
    this.fetchClass();
  }

  public get isOpen(): boolean {
    return this.$isOpen;
  }
  @Input() public set isOpen(value: boolean) {
    this.$isOpen = value;
    this.fetchClass();
  }

  public get customStyle(): Partial<properties.ModalBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(value: Partial<properties.ModalBaseTheme>) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.size, this.position, this.customStyle)) {
      const propertyClass = properties.getClasses({
        size: this.size,
        position: this.position,
        customStyle: this.customStyle,
      });

      this.componentClass = propertyClass.modalClass;
      this.contentClasses = {
        modalContainer: propertyClass.modalContainerClass,
        modalContent: propertyClass.modalContentClass,
      };
    }
  }
  //#endregion

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
