import type { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
import { SanitizeHtmlPipe } from '../../pipes';
import { FlowbiteLinkRouter } from '../../services';
import { SidebarStateService } from '../../services/state/sidebar.state';
import { BadgeComponent } from '../badge';
import { BaseComponent } from '../base.component';
import * as properties from './sidebar-item.theme';
import { SidebarItemThemeService } from './sidebar-item.theme.service';

import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, inject, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, RouterLink, RouterLinkActive, SanitizeHtmlPipe, BadgeComponent],
  selector: 'flowbite-sidebar-item',
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent extends BaseComponent {
  public readonly themeService = inject(SidebarItemThemeService);
  public readonly sidebarStateService: SidebarStateService = inject(SidebarStateService);
  public readonly flowbiteLinkRouter = inject(FlowbiteLinkRouter);

  public override contentClasses = signal<properties.SidebarItemClass>(properties.SidebarItemClassInstance);

  //#region properties
  public icon = input<string | undefined>(undefined);
  public link = input<FlowbiteLink | undefined>(undefined);
  public label = input<string | undefined>(undefined);
  public customStyle = input<DeepPartial<properties.SidebarItemBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      icon: this.icon(),
      link: this.link(),
      label: this.label(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  public async onClick(): Promise<void> {
    await this.flowbiteLinkRouter.navigate(this.link());
  }
}
