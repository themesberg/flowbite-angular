import type { BadgeClass, BadgeColors, BadgeSizes, BadgeTheme } from './badge.theme';
import { BadgeThemeService } from './badge.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/badge/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-badge',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent extends BaseComponent<BadgeClass> {
  /**
   * Optional `FlowbiteRouterLinkDirective` injected
   */
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective, { optional: true });
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(BadgeThemeService);

  //#region properties
  /**
   * Set the badge color
   *
   * @default primary
   */
  public color = model<keyof BadgeColors>('primary');
  /**
   * Set the badge size
   *
   * @default xs
   */
  public size = model<keyof BadgeSizes>('xs');
  /**
   * Set if the badge is icon only
   *
   * @default false
   */
  public isIconOnly = model<boolean>(false);
  /**
   * Set if the badge is pill
   *
   * @default false
   */
  public isPill = model<boolean>(false);
  /**
   * Set the custom style for this badge
   */
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
