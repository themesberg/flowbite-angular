import type { ModalFooterClass, ModalFooterTheme } from './modal-footer.theme';
import { ModalFooterThemeService } from './modal-footer.theme.service';
import { ModalComponent } from './modal.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/modal/
 */
@Component({
  standalone: true,
  selector: 'flowbite-modal-footer',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalFooterComponent extends BaseComponent<ModalFooterClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(ModalFooterThemeService);
  /**
   * The parent `ModalComponent`
   */
  public readonly modalComponent = inject(ModalComponent);

  //#region properties
  /**
   * Set the custom style for this modal footer
   */
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
