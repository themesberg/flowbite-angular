import type { DeepPartial } from '../../common/flowbite.type';
import { SanitizeHtmlPipe } from '../../pipes';
import { SidebarStateService } from '../../services/state/sidebar.state';
import { createClass } from '../../utils';
import { routerLinkInputs } from '../../utils/directive.input.util';
import { BadgeComponent } from '../badge';
import { BaseComponent } from '../base.component';
import type { SidebarItemClass, SidebarItemTheme } from './sidebar-item.theme';
import { SidebarItemThemeService } from './sidebar-item.theme.service';

import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, inject, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, RouterLinkActive, SanitizeHtmlPipe, BadgeComponent],
  selector: 'flowbite-sidebar-item',
  template: `
    <span
      class="flex-shrink-0"
      [innerHTML]="icon()! | sanitizeHtml"
      *ngIf="icon()"></span>
    <span
      [ngClass]="contentClasses().sidebarIconClass"
      [class.ml-3]="icon()">
      <ng-content />
    </span>
    <flowbite-badge *ngIf="label()"> {{ label() }} </flowbite-badge>
  `,
  hostDirectives: [
    {
      directive: RouterLink,
      inputs: routerLinkInputs,
    },
  ],
})
export class SidebarItemComponent extends BaseComponent {
  public readonly routerLink = inject(RouterLink);
  public readonly themeService = inject(SidebarItemThemeService);
  public readonly sidebarStateService = inject(SidebarStateService);

  public override contentClasses = signal<SidebarItemClass>(createClass({ rootClass: '', sidebarIconClass: '' }));

  //#region properties
  public icon = input<string | undefined>(undefined);
  public label = input<string | undefined>(undefined);
  public customStyle = input<DeepPartial<SidebarItemTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      icon: this.icon(),
      link: this.routerLink.urlTree,
      label: this.label(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    this.sidebarStateService.set('isOpen', false);
  }
}
