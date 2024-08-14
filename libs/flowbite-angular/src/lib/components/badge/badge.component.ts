import type { DeepPartial } from '../../common/flowbite.type';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { routerLinkInputs } from '../../utils/directive.input.util';
import { BaseComponent } from '../base-component.directive';
import type { BadgeClass, BadgeColors, BadgeSizes, BadgeTheme } from './badge.theme';
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
  public readonly routerLink = inject(RouterLink);
  public readonly themeService = inject(BadgeThemeService);

  public override contentClasses = signal<BadgeClass>(createClass({ rootClass: '' }));

  //#region properties
  public color = input<keyof BadgeColors>('dark');
  public size = input<keyof BadgeSizes>('xs');
  public isIconOnly = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public isPill = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public customStyle = input<DeepPartial<BadgeTheme>>({});
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
