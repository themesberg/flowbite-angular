import type { DeepPartial } from '../../common/flowbite.type';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { routerLinkInputs } from '../../utils/directive.input.util';
import { BaseComponent } from '../base.component';
import type { BadgeBaseTheme, BadgeClass, BadgeColors, BadgeSizes } from './badge.theme';
import { BadgeClassInstance } from './badge.theme';
import { BadgeThemeService } from './badge.theme.service';

import { NgClass } from '@angular/common';
import { booleanAttribute, Component, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * @see https://flowbite.com/docs/components/badge/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-badge',
  template: `<ng-content />`,
  hostDirectives: [
    {
      directive: RouterLink,
      inputs: routerLinkInputs,
    },
  ],
})
export class BadgeComponent extends BaseComponent {
  protected readonly routerLink = inject(RouterLink);
  protected readonly themeService = inject(BadgeThemeService);

  public override contentClasses = signal<BadgeClass>(BadgeClassInstance);

  //#region properties
  public color = input<keyof BadgeColors>('blue');
  public size = input<keyof BadgeSizes>('xs');
  public isIconOnly = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public isPill = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public customStyle = input<DeepPartial<BadgeBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      size: this.size(),
      isIconOnly: booleanToFlowbiteBoolean(this.isIconOnly()),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      link: this.routerLink.urlTree,
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
