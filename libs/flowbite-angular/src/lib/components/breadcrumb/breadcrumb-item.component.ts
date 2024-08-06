import type { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
import type { RoutableInterface } from '../../interfaces';
import { FlowbiteLinkRouter } from '../../services';
import { CHEVRON_RIGHT_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base.component';
import { IconComponent, IconRegistry } from '../icon';
import * as properties from './breadcrumb-item.theme';
import { BreadcrumbItemThemeService } from './breadcrumb-item.theme.service';

import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, HostListener, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet, IconComponent],
  selector: 'flowbite-breadcrumb-item',
  template: `
    <flowbite-icon
      [ngClass]="contentClasses().breadcrumbIconClass"
      svgIcon="flowbite-angular:chevron-right" />
    <ng-content />
  `,
})
export class BreadcrumbItemComponent extends BaseComponent implements OnInit, RoutableInterface {
  protected readonly themeService = inject(BreadcrumbItemThemeService);
  protected readonly iconRegistry = inject(IconRegistry);
  protected readonly domSanitizer = inject(DomSanitizer);
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

  public override ngOnInit() {
    super.ngOnInit();

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-right',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_RIGHT_SVG_ICON),
    );
  }

  @HostListener('click')
  public async onNavigate(): Promise<void> {
    await this.flowbiteLinkRouter.navigate(this.href());
  }
}
