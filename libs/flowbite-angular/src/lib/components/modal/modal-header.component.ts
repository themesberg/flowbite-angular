import * as properties from './modal-header.theme';
import { BaseComponent } from '../base.component';
import { ModalComponent } from './modal.component';

import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-header',
  templateUrl: './modal-header.component.html',
})
export class ModalHeaderComponent extends BaseComponent implements OnInit {
  @Input() customStyle: Partial<properties.DropdownHeaderBaseTheme> = {};

  constructor(readonly modal: ModalComponent) {
    super();
  }

  ngOnInit(): void {
    const t = properties.getClasses({
      customStyle: this.customStyle,
    });

    this.componentClass = t.modalHeaderClass;
    this.contentClasses = {
      modalHeaderTitle: t.modalHeaderTitleClass,
      modalHeaderButton: t.modalHeaderButtonClass,
    };
  }
}
