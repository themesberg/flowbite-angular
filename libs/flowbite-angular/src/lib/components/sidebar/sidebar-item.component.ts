import * as properties from './sidebar-item.theme';
import { BadgeComponent } from '../badge';
import { BaseComponent } from '../base.component';
import { SanitizeHtmlPipe } from '../../pipes';
import { paramNotNull } from '../../utils/param.util';

import { Component, inject, input, signal } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarState } from '../../services/state/sidebar.state';
import { SignalStoreService } from '../../services/signal-store.service';

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
  protected signalStoreService = inject<SignalStoreService<SidebarState>>(
    SignalStoreService<SidebarState>,
  );

  protected override contentClasses = signal<properties.SidebarItemClass>(
    properties.SidebarItemClassInstance(),
  );

  //#region properties
  public icon = input<string | undefined>(undefined);
  public link = input<string | undefined>(undefined);
  public label = input<string | undefined>(undefined);
  public customStyle = input<Partial<properties.SidebarItemBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.customStyle())) {
      const propertyClass = properties.getClasses({
        icon: this.icon(),
        link: this.link(),
        label: this.label(),
        customStyle: this.customStyle(),
      });

      this.contentClasses.set(propertyClass);
    }
  }
  //#endregion
}
