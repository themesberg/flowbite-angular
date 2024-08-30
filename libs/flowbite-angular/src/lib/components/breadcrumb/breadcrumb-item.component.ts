import type { DeepPartial } from '../../common/flowbite.type';
import { FlowbiteRouterLinkDirective } from '../../directives/flowbite-router-link.directive';
import { createClass } from '../../utils';
import { CHEVRON_RIGHT_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { IconComponent, IconRegistry } from '../icon';
import type { BreadcrumbItemClass, BreadcrumbItemTheme } from './breadcrumb-item.theme';
import { BreadcrumbItemThemeService } from './breadcrumb-item.theme.service';
import { BreadcrumbComponent } from './breadcrumb.component';
import type { BreadcrumbColors } from './breadcrumb.theme';

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
      directive: FlowbiteRouterLinkDirective,
      inputs: FlowbiteRouterLinkDirective.flowbiteRouterLinkInputs,
      outputs: FlowbiteRouterLinkDirective.flowbiteRouterLinkOutputs,
    },
  ],
})
export class BreadcrumbItemComponent extends BaseComponent implements OnInit {
  public readonly themeService = inject(BreadcrumbItemThemeService);
  public readonly breadcrumbComponent = inject(BreadcrumbComponent);
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  public override contentClasses = signal<BreadcrumbItemClass>(createClass({ rootClass: '', breadcrumbIconClass: '' }));

  //#region properties
  public color = input<keyof BreadcrumbColors>(this.breadcrumbComponent.color());
  public customStyle = input<DeepPartial<BreadcrumbItemTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      link: this.flowbiteRouterLink.routerLink.urlTree,
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-right',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_RIGHT_SVG_ICON),
    );
  }
  //#endregion
}
