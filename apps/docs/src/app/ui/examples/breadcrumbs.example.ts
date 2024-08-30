import type { TableOfContent } from '../shared/models/table-of-content';
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

  public readonly tableOfContent: TableOfContent[] = [
    {
      fragmentName: 'Default breadcrumb',
    },
    {
      fragmentName: 'Theme',
      children: [
        {
          fragmentName: 'Breadcrumb theme',
        },
        {
          fragmentName: 'Breadcrumb item theme',
        },
      ],
    },
  ];
}
