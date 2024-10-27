import type { DeepPartial } from '../../common';
import { BaseComponent } from '../base-component.directive';
import type { ModalBodyClass, ModalBodyTheme } from './modal-body.theme';
import { ModalBodyThemeService } from './modal-body.theme.service';
import { ModalComponent } from './modal.component';

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
