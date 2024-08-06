import type { DeepPartial } from '../../common';
import { NavbarStateService } from '../../services';
import { BARS_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base.component';
import { IconComponent, IconRegistry } from '../icon';
import * as properties from './navbar-toggle.theme';
import { NavbarToggleThemeService } from './navbar-toggle.theme.service';

import { CommonModule } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, HostListener, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'flowbite-navbar-toggle',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <flowbite-icon
      svgIcon="flowbite-angular:bars"
      class="w-5 h-5" />
  `,
})
export class NavbarToggleComponent extends BaseComponent implements OnInit {
  protected readonly themeService = inject(NavbarToggleThemeService);
  protected readonly navbarStateService = inject(NavbarStateService);
  protected readonly iconRegistry = inject(IconRegistry);
  protected readonly domSanitizer = inject(DomSanitizer);

  public override contentClasses = signal<properties.NavbarToggleClass>(properties.NavbarToggleClassInstance);

  //#region properties
  public customStyle = input<DeepPartial<properties.NavbarToggleBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public override ngOnInit() {
    super.ngOnInit();

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'bars',
      this.domSanitizer.bypassSecurityTrustHtml(BARS_SVG_ICON),
    );
  }

  @HostListener('click')
  public onClick(): void {
    const isCollapsed = this.navbarStateService.select('isOpen')();

    this.navbarStateService.set('isOpen', !isCollapsed);
  }
}
