import { AsyncPipe, NgIf } from '@angular/common';
import { BadgeComponent } from '../badge';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SanitizeHtmlPipe } from '../../pipes';
import { SidebarService } from '../../services';

@Component({
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    RouterLinkActive,
    SanitizeHtmlPipe,
    AsyncPipe,
    BadgeComponent,
  ],
  selector: 'flowbite-sidebar-item',
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent {
  @Input() icon?: string;
  @Input() link?: string;
  @Input() label?: string;

  constructor(readonly sidebarService: SidebarService) {}
}
