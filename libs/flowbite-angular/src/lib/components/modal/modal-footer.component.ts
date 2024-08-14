import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { BaseComponent } from '../base-component.directive';
import type { ModalFooterClass, ModalFooterTheme } from './modal-footer.theme';
import { ModalFooterThemeService } from './modal-footer.theme.service';
import { ModalComponent } from './modal.component';

import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-footer',
  template: `<ng-content />`,
})
export class ModalFooterComponent extends BaseComponent {
  public readonly themeService = inject(ModalFooterThemeService);
  public readonly modalComponent = inject(ModalComponent);

  public override contentClasses = signal<ModalFooterClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<ModalFooterTheme>>({});
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
