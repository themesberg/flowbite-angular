import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  ButtonComponent,
  FormFieldComponent,
  InputDirective,
  ThemeService,
} from 'flowbite-angular';

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'flowbite-home',
  standalone: true,
  imports: [
    ButtonComponent,
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    FormFieldComponent,
    InputDirective,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(protected themeService: ThemeService) {}
}
