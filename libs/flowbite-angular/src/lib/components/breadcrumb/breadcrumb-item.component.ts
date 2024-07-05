import type { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
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
export class BreadcrumbItemComponent extends BaseComponent {
  protected override contentClasses = signal<properties.BreadcrumbItemClass>(properties.BreadcrumbItemClassInstance);

  protected readonly themeService = inject(BreadcrumbItemThemeService);
  protected readonly flowbiteLinkRouter = inject(FlowbiteLinkRouter);

  //#region properties
  public link = input<FlowbiteLink | undefined>(undefined);
  public customStyle = input<DeepPartial<properties.BreadcrumbItemBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
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
