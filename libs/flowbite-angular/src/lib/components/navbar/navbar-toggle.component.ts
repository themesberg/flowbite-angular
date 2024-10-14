import type { DeepPartial } from '../../common';
import { NavbarStateService } from '../../services';
import { BARS_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { IconComponent, IconRegistry } from '../icon';
import type { NavbarToggleClass, NavbarToggleTheme } from './navbar-toggle.theme';
import { NavbarToggleThemeService } from './navbar-toggle.theme.service';

import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, input } from '@angular/core';
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
export class NavbarToggleComponent extends BaseComponent<NavbarToggleClass> {
  public readonly themeService = inject(NavbarToggleThemeService);
  public readonly navbarStateService = inject(NavbarStateService);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  public customStyle = input<DeepPartial<NavbarToggleTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarToggleClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'bars',
      this.domSanitizer.bypassSecurityTrustHtml(BARS_SVG_ICON),
    );
  }
  //#endregion

  @HostListener('click')
  public onClick(): void {
    const isCollapsed = this.navbarStateService.select('isOpen')();

    this.navbarStateService.set('isOpen', !isCollapsed);
  }
}
