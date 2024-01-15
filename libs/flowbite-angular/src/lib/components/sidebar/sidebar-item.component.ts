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
  template: `<a
    class="group flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
    [routerLink]="link"
    routerLinkActive="bg-gray-200 dark:bg-gray-700"
    [routerLinkActiveOptions]="{ exact: true }"
  >
    <span
      class="flex-shrink-0"
      [innerHTML]="icon! | sanitizeHtml"
      *ngIf="!!icon"
    ></span>
    <span
      class="flex-1 whitespace-nowrap"
      [class.ml-3]="!!icon"
      *ngIf="(sidebarService.$collapsed | async) === false"
    >
      <ng-content></ng-content>
    </span>
    <flowbite-badge
      *ngIf="(sidebarService.$collapsed | async) === false && label"
      >{{ label }}</flowbite-badge
    >
  </a>`,
})
export class SidebarItemComponent {
  @Input() icon?: string;
  @Input() link?: string;
  @Input() label?: string;

  constructor(readonly sidebarService: SidebarService) {}
}
