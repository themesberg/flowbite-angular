import type { DeepPartial } from '../../common/flowbite.type';
import { FlowbiteRouterLinkDirective } from '../../directives/flowbite-router-link.directive';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import type { BadgeClass, BadgeColors, BadgeSizes, BadgeTheme } from './badge.theme';
import { BadgeThemeService } from './badge.theme.service';

import { NgClass } from '@angular/common';
import { booleanAttribute, Component, inject, input, signal } from '@angular/core';

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
      directive: FlowbiteRouterLinkDirective,
      inputs: FlowbiteRouterLinkDirective.flowbiteRouterLinkInputs,
      outputs: FlowbiteRouterLinkDirective.flowbiteRouterLinkOutputs,
    },
  ],
})
export class BadgeComponent extends BaseComponent {
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective);
  public readonly themeService = inject(BadgeThemeService);

  public override contentClasses = signal<BadgeClass>(createClass({ rootClass: '' }));

  //#region properties
  public color = input<keyof BadgeColors>('primary');
  public size = input<keyof BadgeSizes>('xs');
  public isIconOnly = input<boolean, unknown>(false, { transform: booleanAttribute });
  public isPill = input<boolean, unknown>(false, { transform: booleanAttribute });
  public customStyle = input<DeepPartial<BadgeTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      size: this.size(),
      isIconOnly: booleanToFlowbiteBoolean(this.isIconOnly()),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      link: this.flowbiteRouterLink.routerLink.urlTree,
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
