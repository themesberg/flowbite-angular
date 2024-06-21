import * as properties from './breadcrumb-item.theme';

import { BaseComponent } from '../base.component';
import { BreadcrumbItemThemeService } from './breadcrumb-item.theme.service';
import { FlowbiteLink } from '../../common/flowbite.type';
import { LinkRouter } from '../../services';

import { Component, HostListener, inject, input, signal } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
})
export class BreadcrumbItemComponent extends BaseComponent {
  protected readonly themeService = inject(BreadcrumbItemThemeService);
  protected readonly linkRouter = inject(LinkRouter);

  protected override contentClasses = signal<properties.BreadcrumbItemClass>(
    properties.BreadcrumbItemClassInstance,
  );

  //#region properties
  public link = input<FlowbiteLink | undefined>(undefined);
  public customStyle = input<Partial<properties.BreadcrumbItemBaseTheme>>({});
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
    await this.linkRouter.navigate(this.link());
  }
}
