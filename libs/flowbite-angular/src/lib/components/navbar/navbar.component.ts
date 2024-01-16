import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() extraClass = '';
  @Input() rounded = false;
  @Input() border = false;
  @Input() fluid = false;
}
