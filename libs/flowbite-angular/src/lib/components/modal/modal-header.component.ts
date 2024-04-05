import * as properties from './modal-header.theme';
import { BaseComponent } from '../base.component';
import { ModalComponent } from './modal.component';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-header',
  templateUrl: './modal-header.component.html',
})
export class ModalHeaderComponent extends BaseComponent {
  @Input() customStyle: Partial<properties.ModalHeaderBaseTheme> = {};

  constructor(readonly modal: ModalComponent) {
    super();
  }

  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.modalHeaderClass;
    this.contentClasses = {
      modalHeaderTitle: propertyClass.modalHeaderTitleClass,
      modalHeaderButton: propertyClass.modalHeaderButtonClass,
    };
  }
}
