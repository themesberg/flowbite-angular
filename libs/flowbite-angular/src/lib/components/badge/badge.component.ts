import type { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
import type { RoutableInterface } from '../../interfaces';
import { FlowbiteLinkRouter } from '../../services/flowbite-link-router.service';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
import type { BadgeBaseTheme, BadgeClass, BadgeColors, BadgeSizes } from './badge.theme';
import { BadgeClassInstance } from './badge.theme';
import { BadgeThemeService } from './badge.theme.service';

import { NgClass } from '@angular/common';
import { booleanAttribute, Component, HostListener, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * @see https://flowbite.com/docs/components/badge/
 */
@Component({
  standalone: true,
  imports: [NgClass, RouterLink],
  selector: 'flowbite-badge',
  template: `<ng-content />`,
})
export class BadgeComponent extends BaseComponent implements RoutableInterface {
  protected readonly themeService = inject(BadgeThemeService);
  public readonly flowbiteLinkRouter = inject(FlowbiteLinkRouter);

  public override contentClasses = signal<BadgeClass>(BadgeClassInstance);

  //#region properties
  public color = input<keyof BadgeColors>('blue');
  public size = input<keyof BadgeSizes>('xs');
  public isIconOnly = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public isPill = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public href = input<FlowbiteLink | undefined>(undefined);
  public customStyle = input<DeepPartial<BadgeBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      size: this.size(),
      isIconOnly: booleanToFlowbiteBoolean(this.isIconOnly()),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      link: this.href(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  public async onNavigate(): Promise<void> {
    await this.flowbiteLinkRouter.navigate(this.href());
  }
}
