import type { DeepPartial } from '../../common';
import { BaseComponent } from '../base.component';
import * as properties from './modal-body.theme';
import { ModalBodyThemeService } from './modal-body.theme.service';

import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-body',
  template: `<ng-content />`,
})
export class ModalBodyComponent extends BaseComponent {
  protected readonly themeService = inject(ModalBodyThemeService);

  public override contentClasses = signal<properties.ModalBodyClass>(properties.ModalBodyClassInstance);

  //#region properties
  public customStyle = input<DeepPartial<properties.ModalBodyBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
