import * as properties from './sidebar-item.theme';
import { BadgeComponent } from '../badge';
import { BaseComponent } from '../base.component';
import { SanitizeHtmlPipe } from '../../pipes';
import { SidebarService } from '../../services';

import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterLink,
    RouterLinkActive,
    SanitizeHtmlPipe,
    AsyncPipe,
    BadgeComponent,
  ],
  selector: 'flowbite-sidebar-item',
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent extends BaseComponent implements OnInit {
  @Input() icon: string | undefined;
  @Input() link: string | undefined;
  @Input() label: string | undefined;
  @Input() customStyle: Partial<properties.SidebarItemBaseTheme> = {};

  constructor(readonly sidebarService: SidebarService) {
    super();
  }

  ngOnInit(): void {
    const propertyClass = properties.getClasses({
      icon: this.icon,
      link: this.link,
      label: this.label,
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.sidebarClass;
    this.contentClasses = {
      sidebarIcon: propertyClass.sidebarIconClass,
    };
  }
}
