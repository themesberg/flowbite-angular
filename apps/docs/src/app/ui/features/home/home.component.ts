import { CopyPackageInputComponent } from './copy-package-input/copy-package-input.component';

import type { ThemeState } from 'flowbite-angular';
import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  ButtonComponent,
  FormFieldComponent,
  GlobalSignalStoreService,
  IconComponent,
  InputDirective,
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
    IconComponent,
    CopyPackageInputComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  protected themeGlobalSignalStoreService = inject<GlobalSignalStoreService<ThemeState>>(
    GlobalSignalStoreService<ThemeState>,
  );
}
