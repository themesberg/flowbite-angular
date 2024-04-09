import * as properties from './modal.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import {
  booleanToFlowbiteBoolean,
  flowbiteBooleanToBoolean,
} from '../../utils/boolean.util';
import { paramNotNull } from '../../utils/param.util';

import {
  Component,
  HostListener,
  Input,
  booleanAttribute,
} from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/modal/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.ModalClass,
    string
  >;
  //#region properties
  protected $size: keyof properties.ModalSizes = 'md';
  protected $position: keyof properties.ModalPositions = 'center';
  protected $dismissable: keyof FlowbiteBoolean = 'disabled';
  protected $isOpen: keyof FlowbiteBoolean = 'disabled';
  protected $customStyle: Partial<properties.ModalBaseTheme> = {};
  //#endregion
  //#region getter/setter
  /** @default md */
  public get size(): keyof properties.ModalSizes {
    return this.$size;
  }
  @Input() public set size(value: keyof properties.ModalSizes) {
    this.$size = value;
    this.fetchClass();
  }

  /** @default center */
  public get position(): keyof properties.ModalPositions {
    return this.$position;
  }
  @Input() public set position(value: keyof properties.ModalPositions) {
    this.$position = value;
    this.fetchClass();
  }

  /** @default false */
  public get dismissable(): boolean {
    return flowbiteBooleanToBoolean(this.$dismissable);
  }
  @Input({ transform: booleanAttribute }) public set dismissable(
    value: boolean,
  ) {
    this.$dismissable = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default false */
  public get isOpen(): boolean {
    return flowbiteBooleanToBoolean(this.$isOpen);
  }
  @Input({ transform: booleanAttribute }) public set isOpen(value: boolean) {
    this.$isOpen = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default {} */
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
    if (paramNotNull(this.$size, this.$position, this.$customStyle)) {
      const propertyClass = properties.getClasses({
        size: this.$size,
        position: this.$position,
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
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
