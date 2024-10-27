import type { ModalBodyClass, ModalBodyTheme } from './modal-body.theme';
import { ModalBodyThemeService } from './modal-body.theme.service';
import { ModalComponent } from './modal.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import { Component, inject, model } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-body',
  template: `<ng-content />`,
})
export class ModalBodyComponent extends BaseComponent<ModalBodyClass> {
  public readonly themeService = inject(ModalBodyThemeService);
  public readonly modalComponent = inject(ModalComponent);

  //#region properties
  public customStyle = model<DeepPartial<ModalBodyTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): ModalBodyClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
