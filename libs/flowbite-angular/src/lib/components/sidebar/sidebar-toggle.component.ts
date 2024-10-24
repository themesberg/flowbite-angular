import type { DeepPartial } from '../../common';
import { BARS_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { IconComponent, IconRegistry } from '../icon';
import type { SidebarToggleClass, SidebarToggleSizes, SidebarToggleTheme } from './sidebar-toggle.theme';
import { SidebarToggleThemeService } from './sidebar-toggle.theme.service';
import { SidebarComponent } from './sidebar.component';
import type { SidebarColors } from './sidebar.theme';

import type { OnInit } from '@angular/core';
import { Component, inject, model } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [IconComponent],
  selector: 'flowbite-sidebar-toggle',
  template: `<flowbite-icon svgIcon="flowbite-angular:bars" />`,
  host: {
    '(click)': 'onClick()',
  },
})
export class SidebarToggleComponent extends BaseComponent<SidebarToggleClass> implements OnInit {
  public readonly themeService = inject(SidebarToggleThemeService);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);
  public readonly sidebarComponent = model<SidebarComponent>(inject(SidebarComponent));

  //#region properties
  public color = model<keyof SidebarColors>('primary');
  public size = model<keyof SidebarToggleSizes>('sm');
  public customStyle = model<DeepPartial<SidebarToggleTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): SidebarToggleClass {
    return this.themeService.getClasses({
      color: this.color(),
      size: this.size(),
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'tabs',
      this.domSanitizer.bypassSecurityTrustHtml(BARS_SVG_ICON),
    );
  }
  //#endregion

  public onClick(): void {
    const isOpen = this.sidebarComponent().isOpen();

    this.sidebarComponent().isOpen.set(!isOpen);
  }
}
