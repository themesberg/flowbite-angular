import * as properties from './modal-body.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-body',
  templateUrl: './modal-body.component.html',
})
export class ModalBodyComponent extends BaseComponent {
  protected override contentClasses = signal<properties.ModalBodyClass>(
    properties.ModalBodyClassInstance(),
  );
  //#region properties
  public customStyle = input<Partial<properties.ModalBodyBaseTheme>>({});
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
