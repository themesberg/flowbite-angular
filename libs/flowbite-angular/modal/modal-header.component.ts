import type { ModalHeaderClass, ModalHeaderTheme } from './modal-header.theme';
import { ModalHeaderThemeService } from './modal-header.theme.service';
import { ModalComponent } from './modal.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { CLOSE_SVG_ICON } from 'flowbite-angular/utils';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @see https://flowbite.com/docs/components/modal/
 */
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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalHeaderComponent extends BaseComponent<ModalHeaderClass> implements OnInit {
  /**
   * Service injected used to generate class
   */
  public readonly stateService = inject(ModalHeaderThemeService);
  /**
   * The parent `ModalComponent`
   */
  public readonly modalComponent = inject(ModalComponent);
  /**
   * `IconRegistry` service
   */
  public readonly iconRegistry = inject(IconRegistry);
  /**
   * `DomSanitizer` service
   */
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  /**
   * Set the custom style for this modal header
   */
  public customStyle = model<DeepPartial<ModalHeaderTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): ModalHeaderClass {
    return this.stateService.getClasses({
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'close',
      this.domSanitizer.bypassSecurityTrustHtml(CLOSE_SVG_ICON)
    );
  }
  //#endregion
}
