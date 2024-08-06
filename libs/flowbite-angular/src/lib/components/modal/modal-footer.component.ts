import type { DeepPartial } from '../../common';
import { BaseComponent } from '../base.component';
import * as properties from './modal-footer.theme';
import { ModalFooterThemeService } from './modal-footer.theme.service';
import { ModalComponent } from './modal.component';

import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-footer',
  templateUrl: './modal-footer.component.html',
})
export class ModalFooterComponent extends BaseComponent {
  public readonly themeService = inject(ModalFooterThemeService);
  public readonly modalComponent = inject<ModalComponent>(ModalComponent);

  public override contentClasses = signal<properties.ModalFooterClass>(properties.ModalFooterClassInstance);

  //#region properties
  public customStyle = input<DeepPartial<properties.ModalFooterBaseTheme>>({});
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
