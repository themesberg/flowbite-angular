import * as properties from './modal-header.theme';
import { BaseComponent } from '../base.component';
import { ModalComponent } from './modal.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-header',
  templateUrl: './modal-header.component.html',
})
export class ModalHeaderComponent extends BaseComponent {
  //#region properties
  protected $customStyle: Partial<properties.ModalHeaderBaseTheme> = {};
  //#endregion
  //#region getter/setter
  public get customStyle(): Partial<properties.ModalHeaderBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.ModalHeaderBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  constructor(readonly modal: ModalComponent) {
    super();
  }

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.customStyle)) {
      const propertyClass = properties.getClasses({
        customStyle: this.customStyle,
      });

      this.componentClass = propertyClass.modalHeaderClass;
      this.contentClasses = {
        modalHeaderTitle: propertyClass.modalHeaderTitleClass,
        modalHeaderButton: propertyClass.modalHeaderButtonClass,
      };
    }
  }
  //#endregion
}
