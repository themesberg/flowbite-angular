import * as properties from './sidebar-item.theme';

import { BadgeComponent } from '../badge';
import { BaseComponent } from '../base.component';
import { DeepPartial, FlowbiteLink } from '../../common/flowbite.type';
import { LinkRouter } from '../../services';
import { SanitizeHtmlPipe } from '../../pipes';
import { SidebarItemThemeService } from './sidebar-item.theme.service';
import { SidebarStateService } from '../../services/state/sidebar.state';

import { Component, HostListener, inject, input, signal } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterLink,
    RouterLinkActive,
    SanitizeHtmlPipe,
    BadgeComponent,
  ],
  selector: 'flowbite-sidebar-item',
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent extends BaseComponent {
  protected override contentClasses = signal<properties.SidebarItemClass>(
    properties.SidebarItemClassInstance,
  );

  protected readonly themeService = inject(SidebarItemThemeService);
  protected readonly sidebarStateService: SidebarStateService =
    inject(SidebarStateService);
  protected readonly linkRouter = inject(LinkRouter);

  //#region properties
  public icon = input<string | undefined>(undefined);
  public link = input<FlowbiteLink | undefined>(undefined);
  public label = input<string | undefined>(undefined);
  public customStyle = input<DeepPartial<properties.SidebarItemBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
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
  protected async onClick(): Promise<void> {
    await this.linkRouter.navigate(this.link());
  }
}
