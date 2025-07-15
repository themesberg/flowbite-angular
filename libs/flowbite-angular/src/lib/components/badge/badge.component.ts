import type { DeepPartial } from '../../common/type-definitions/flowbite.deep-partial';
import { FlowbiteRouterLinkDirective } from '../../directives/flowbite-router-link.directive';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import type { BadgeClass, BadgeColors, BadgeSizes, BadgeTheme } from './badge.theme';
import { BadgeThemeService } from './badge.theme.service';

import { NgClass } from '@angular/common';
import { Component, inject, model } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/badge/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-badge',
  template: `<ng-content />`,
})
export class BadgeComponent extends BaseComponent<BadgeClass> {
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective, { optional: true });
  public readonly themeService = inject(BadgeThemeService);

  //#region properties
  public color = model<keyof BadgeColors>('primary');
  public size = model<keyof BadgeSizes>('xs');
  public isIconOnly = model<boolean>(false);
  public isPill = model<boolean>(false);
  public customStyle = model<DeepPartial<BadgeTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): BadgeClass {
    return this.themeService.getClasses({
      color: this.color(),
      size: this.size(),
      isIconOnly: booleanToFlowbiteBoolean(this.isIconOnly()),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      link: this.flowbiteRouterLink?.routerLink.urlTree ?? null,
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
