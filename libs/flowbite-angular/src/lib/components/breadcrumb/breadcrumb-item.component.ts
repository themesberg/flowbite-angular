import type { DeepPartial } from '../../common/flowbite.type';
import { RoutableDirective } from '../../directives';
import { CHEVRON_RIGHT_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base.component';
import { IconComponent, IconRegistry } from '../icon';
import * as properties from './breadcrumb-item.theme';
import { BreadcrumbItemThemeService } from './breadcrumb-item.theme.service';

import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, inject, input, signal } from '@angular/core';
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
  hostDirectives: [
    {
      directive: RoutableDirective,
      inputs: ['href'],
    },
  ],
})
export class BreadcrumbItemComponent extends BaseComponent implements OnInit {
  protected readonly routableDirective = inject(RoutableDirective);
  protected readonly themeService = inject(BreadcrumbItemThemeService);
  protected readonly iconRegistry = inject(IconRegistry);
  protected readonly domSanitizer = inject(DomSanitizer);

  public override contentClasses = signal<properties.BreadcrumbItemClass>(properties.BreadcrumbItemClassInstance);

  //#region properties
  public customStyle = input<DeepPartial<properties.BreadcrumbItemBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      link: this.routableDirective.href(),
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
}
