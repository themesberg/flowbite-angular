import type { Example } from './examples';

import { breadcrumbItemTheme, breadcrumbTheme, themeToString } from 'flowbite-angular';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbExampleService {
  public readonly defaultBreadcrumb: Example[] = [
    {
      language: 'angular-html',
      name: 'breadcrumb/default',
    },
  ];

  public readonly breadcrumbTheme: Example[] = [
    {
      name: 'Breadcrumb theme',
      language: 'angular-ts',
      rawCode: themeToString(breadcrumbTheme),
    },
    {
      name: 'Breadcrumb item theme',
      language: 'angular-ts',
      rawCode: themeToString(breadcrumbItemTheme),
    },
  ];
}
