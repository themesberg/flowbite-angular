import * as properties from './modal-footer.theme';
import { BaseComponent } from '../base.component';
import { ModalComponent } from './modal.component';

import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-footer',
  templateUrl: './modal-footer.component.html',
})
export class ModalFooterComponent extends BaseComponent implements OnInit {
  @Input() customStyle: Partial<properties.ModalFooterBaseTheme> = {};

  constructor(public modal: ModalComponent) {
    super();
  }

  ngOnInit(): void {
    const propertyClass = properties.getClasses({
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
