import { AsyncPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SidebarService } from '../../services';

@Component({
  standalone: true,
  imports: [NgClass, AsyncPipe],
  selector: 'flowbite-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() extraClass = '';
  @Input() rounded = false;

  constructor(readonly sidebarService: SidebarService) {}
}
