import * as properties from './modal-body.theme';
import { BaseComponent } from '../base.component';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-body',
  templateUrl: './modal-body.component.html',
})
export class ModalBodyComponent extends BaseComponent {
  @Input() customStyle: Partial<properties.ModalBodyBaseTheme> = {};

  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
