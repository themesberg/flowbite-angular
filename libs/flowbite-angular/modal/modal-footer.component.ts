import type { ModalFooterClass, ModalFooterTheme } from './modal-footer.theme';
import { ModalFooterThemeService } from './modal-footer.theme.service';
import { ModalComponent } from './modal.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import { Component, inject, model } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-footer',
  template: `<ng-content />`,
})
export class ModalFooterComponent extends BaseComponent<ModalFooterClass> {
  public readonly themeService = inject(ModalFooterThemeService);
  public readonly modalComponent = inject(ModalComponent);

  //#region properties
  public customStyle = model<DeepPartial<ModalFooterTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): ModalFooterClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
