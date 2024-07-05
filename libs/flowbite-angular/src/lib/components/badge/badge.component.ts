import type { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
import { FlowbiteLinkRouter } from '../../services/flowbite-link-router.service';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
import * as properties from './badge.theme';
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
  templateUrl: './badge.component.html',
})
export class BadgeComponent extends BaseComponent {
  protected override contentClasses = signal<properties.BadgeClass>(properties.BadgeClassInstance);

  protected readonly themeService = inject(BadgeThemeService);
  protected readonly flowbiteLinkRouter = inject(FlowbiteLinkRouter);

  //#region properties
  public color = input<keyof properties.BadgeColors>('blue');
  public size = input<keyof properties.BadgeSizes>('xs');
  public isIconOnly = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public isPill = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public link = input<FlowbiteLink | undefined>(undefined);
  public customStyle = input<DeepPartial<properties.BadgeBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      size: this.size(),
      isIconOnly: booleanToFlowbiteBoolean(this.isIconOnly()),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      link: this.link(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  protected async onClick(): Promise<void> {
    await this.flowbiteLinkRouter.navigate(this.link());
  }
}
