import { BreadcrumbItemComponent } from './breadcrumb-item.component';
import type { BreadcrumbClass, BreadcrumbColors, BreadcrumbTheme } from './breadcrumb.theme';
import { BreadcrumbThemeService } from './breadcrumb.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/breadcrumb/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-breadcrumb',
  template: `<ng-content />`,
  host: {
    '[attr.aria-label]': 'breadcrumb',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent extends BaseComponent<BreadcrumbClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(BreadcrumbThemeService);
  /**
   * List of `BreadcrumbItemComponent`
   */
  public readonly breadcrumbItemChildren = contentChildren(BreadcrumbItemComponent);

  //#region properties
  /**
   * Set the breacrumb color
   *
   * @default primary
   */
  public color = model<keyof BreadcrumbColors>('primary');
  /**
   * Set the custom style for this breadcrumb
   */
  public customStyle = model<DeepPartial<BreadcrumbTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): BreadcrumbClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.breadcrumbItemChildren().length === 0) {
      throw new Error('No BreadcrumbItemComponent available');
    }
  }
  //#endregion
}
