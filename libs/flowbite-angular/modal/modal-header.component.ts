import type { ModalHeaderClass, ModalHeaderTheme } from './modal-header.theme';
import { ModalHeaderThemeService } from './modal-header.theme.service';
import { ModalComponent } from './modal.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { CLOSE_SVG_ICON } from 'flowbite-angular/utils';

import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export const FLOWBITE_MODAL_HEADER_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<ModalHeaderTheme>
>('FLOWBITE_MODAL_HEADER_CUSTOM_STYLE_DEFAULT_VALUE');

export const modalHeaderDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_MODAL_HEADER_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/modal/
 */
@Component({
  imports: [IconComponent],
  selector: 'flowbite-modal-header',
  template: `
    <h3 [class]="contentClasses().modalHeaderTitleClass">
      <ng-content />
    </h3>
    <button
      type="button"
      [class]="contentClasses().modalHeaderButtonClass"
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
  public customStyle = model(inject(FLOWBITE_MODAL_HEADER_CUSTOM_STYLE_DEFAULT_VALUE));
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
