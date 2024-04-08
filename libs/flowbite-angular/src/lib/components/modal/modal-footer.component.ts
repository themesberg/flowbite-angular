import * as properties from './modal-footer.theme';
import { BaseComponent } from '../base.component';
import { ModalComponent } from './modal.component';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-footer',
  templateUrl: './modal-footer.component.html',
})
export class ModalFooterComponent extends BaseComponent {
  protected override contentClasses?: Record<
    keyof properties.ModalFooterClass,
    string
  >;
  //#region properties
  protected $customStyle: Partial<properties.ModalFooterBaseTheme> = {};
  //#endregion
  //#region getter/setter
  /** @default {} */
  public get customStyle(): Partial<properties.ModalFooterBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(
    value: Partial<properties.ModalFooterBaseTheme>,
  ) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  constructor(public modal: ModalComponent) {
    super();
  }

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.$customStyle)) {
      const propertyClass = properties.getClasses({
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion
}
