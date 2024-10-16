import type { DeepPartial } from '../../common';
import { BaseComponent } from '../base-component.directive';
import { BreadcrumbItemComponent } from './breadcrumb-item.component';
import type { BreadcrumbClass, BreadcrumbColors, BreadcrumbTheme } from './breadcrumb.theme';
import { BreadcrumbThemeService } from './breadcrumb.theme.service';

import { NgClass } from '@angular/common';
import { Component, contentChildren, inject, model } from '@angular/core';

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
})
export class BreadcrumbComponent extends BaseComponent<BreadcrumbClass> {
  public readonly themeService = inject(BreadcrumbThemeService);
  public readonly breadcrumbItemChildren = contentChildren(BreadcrumbItemComponent);

  //#region properties
  public color = model<keyof BreadcrumbColors>('primary');
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
