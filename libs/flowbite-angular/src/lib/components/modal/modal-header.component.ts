import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { CLOSE_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { IconComponent, IconRegistry } from '../icon';
import type { ModalHeaderClass, ModalHeaderTheme } from './modal-header.theme';
import { ModalHeaderThemeService } from './modal-header.theme.service';
import { ModalComponent } from './modal.component';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [NgClass, IconComponent],
  selector: 'flowbite-modal-header',
  template: `
    <h3 [ngClass]="contentClasses().modalHeaderTitleClass">
      <ng-content />
    </h3>
    <button
      type="button"
      [ngClass]="contentClasses().modalHeaderButtonClass"
      data-modal-hide="medium-modal"
      (click)="modalComponent.close()">
      <flowbite-icon
        svgIcon="flowbite-angular:close"
        class="w-5 h-5" />
      <span class="sr-only">Close modal</span>
    </button>
  `,
})
export class ModalHeaderComponent extends BaseComponent implements OnInit {
  public readonly stateService = inject(ModalHeaderThemeService);
  public readonly modalComponent = inject(ModalComponent);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  public override contentClasses = signal<ModalHeaderClass>(
    createClass({ modalHeaderButtonClass: '', modalHeaderTitleClass: '', rootClass: '' }),
  );

  //#region properties
  public customStyle = input<DeepPartial<ModalHeaderTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.stateService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public override ngOnInit() {
    super.ngOnInit();

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'close',
      this.domSanitizer.bypassSecurityTrustHtml(CLOSE_SVG_ICON),
    );
  }
}
