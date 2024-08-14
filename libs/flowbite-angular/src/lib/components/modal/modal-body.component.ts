import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { BaseComponent } from '../base-component.directive';
import type { ModalBodyClass, ModalBodyTheme } from './modal-body.theme';
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
  public readonly themeService = inject(ModalBodyThemeService);

  public override contentClasses = signal<ModalBodyClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<ModalBodyTheme>>({});
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
