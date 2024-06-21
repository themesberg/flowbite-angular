import { Component } from '@angular/core';
import {
  DarkThemeToggleComponent,
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarItemComponent,
  NavbarToggleComponent,
  ScrollTopComponent,
} from 'flowbite-angular';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    NavbarBrandComponent,
    NavbarContentComponent,
    NavbarItemComponent,
    DarkThemeToggleComponent,
    NavbarToggleComponent,
    ScrollTopComponent,
  ],
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
