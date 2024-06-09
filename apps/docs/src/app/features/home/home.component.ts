import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  ButtonComponent,
  FormFieldComponent,
  GlobalSignalStoreService,
  InputDirective,
  ThemeState,
} from 'flowbite-angular';

import { Component, inject } from '@angular/core';
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
  protected themeGlobalSignalStoreService = inject<
    GlobalSignalStoreService<ThemeState>
  >(GlobalSignalStoreService<ThemeState>);
}
