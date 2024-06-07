import * as properties from './modal-footer.theme';
import { BaseComponent } from '../base.component';
import { ModalComponent } from './modal.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-footer',
  templateUrl: './modal-footer.component.html',
})
export class ModalFooterComponent extends BaseComponent {
  protected modalComponent = inject<ModalComponent>(ModalComponent);

  protected override contentClasses = signal<properties.ModalFooterClass>(
    properties.ModalFooterClassInstance(),
  );

  //#region properties
  public customStyle = input<Partial<properties.ModalFooterBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.customStyle())) {
      const propertyClass = properties.getClasses({
        customStyle: this.customStyle(),
      });

      this.contentClasses.set(propertyClass);
    }
  }
  //#endregion
}
