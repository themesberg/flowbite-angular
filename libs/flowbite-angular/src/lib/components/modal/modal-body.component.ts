import * as properties from './modal-body.theme';

import { BaseComponent } from '../base.component';
import { ModalBodyThemeService } from './modal-body.theme.service';

import { Component, inject, input, signal } from '@angular/core';
import { DeepPartial } from '../../common';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-body',
  templateUrl: './modal-body.component.html',
})
export class ModalBodyComponent extends BaseComponent {
  protected override contentClasses = signal<properties.ModalBodyClass>(
    properties.ModalBodyClassInstance,
  );

  protected readonly themeService = inject(ModalBodyThemeService);

  //#region properties
  public customStyle = input<DeepPartial<properties.ModalBodyBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
