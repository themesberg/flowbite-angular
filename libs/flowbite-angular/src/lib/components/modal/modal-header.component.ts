import * as properties from './modal-header.theme';

import { BaseComponent } from '../base.component';
import { ModalComponent } from './modal.component';

import { Component, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-header',
  templateUrl: './modal-header.component.html',
})
export class ModalHeaderComponent extends BaseComponent {
  protected modalComponent = inject<ModalComponent>(ModalComponent);

  protected override contentClasses = signal<properties.ModalHeaderClass>(
    properties.ModalHeaderClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.ModalHeaderBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
