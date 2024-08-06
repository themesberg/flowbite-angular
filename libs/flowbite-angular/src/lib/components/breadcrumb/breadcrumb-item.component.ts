import type { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
import type { RoutableInterface } from '../../interfaces';
import { FlowbiteLinkRouter } from '../../services';
import { BaseComponent } from '../base.component';
import * as properties from './breadcrumb-item.theme';
import { BreadcrumbItemThemeService } from './breadcrumb-item.theme.service';

import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, HostListener, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
})
export class BreadcrumbItemComponent extends BaseComponent implements RoutableInterface {
  public readonly themeService = inject(BreadcrumbItemThemeService);
  public readonly flowbiteLinkRouter = inject(FlowbiteLinkRouter);

  public override contentClasses = signal<properties.BreadcrumbItemClass>(properties.BreadcrumbItemClassInstance);

  //#region properties
  public href = input<FlowbiteLink | undefined>(undefined);
  public customStyle = input<DeepPartial<properties.BreadcrumbItemBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
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
