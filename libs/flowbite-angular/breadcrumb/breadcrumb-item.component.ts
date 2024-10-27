import type { BreadcrumbItemClass, BreadcrumbItemTheme } from './breadcrumb-item.theme';
import { BreadcrumbItemThemeService } from './breadcrumb-item.theme.service';
import { BreadcrumbComponent } from './breadcrumb.component';
import type { BreadcrumbColors } from './breadcrumb.theme';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';
import { CHEVRON_RIGHT_SVG_ICON } from 'flowbite-angular/utils';

import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbItemComponent extends BaseComponent<BreadcrumbItemClass> implements OnInit {
  public readonly themeService = inject(BreadcrumbItemThemeService);
  public readonly breadcrumbComponent = inject(BreadcrumbComponent);
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective, { optional: true });
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  public color = model<keyof BreadcrumbColors>(this.breadcrumbComponent.color());
  public customStyle = model<DeepPartial<BreadcrumbItemTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): BreadcrumbItemClass {
    return this.themeService.getClasses({
      color: this.color(),
      link: this.flowbiteRouterLink?.routerLink.urlTree ?? null,
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-right',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_RIGHT_SVG_ICON)
    );
  }
  //#endregion
}
