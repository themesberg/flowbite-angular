import type { Example } from './examples';

import {
  dropdownDividerTheme,
  dropdownHeaderTheme,
  dropdownItemTheme,
  dropdownTheme,
  themeToString,
} from 'flowbite-angular';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DropdownExampleService {
  public readonly defaultDropdown: Example[] = [
    {
      language: 'angular-html',
      name: 'dropdown/default',
    },
  ];

  public readonly dividerDropdown: Example[] = [
    {
      language: 'angular-html',
      name: 'dropdown/divider',
    },
  ];

  public readonly headerDropdown: Example[] = [
    {
      language: 'angular-html',
      name: 'dropdown/header',
    },
  ];

  public readonly placedDropdown: Example[] = [
    {
      language: 'angular-html',
      name: 'dropdown/placed',
    },
  ];

  public readonly dropdownTheme: Example[] = [
    {
      name: 'Dropdown theme',
      language: 'angular-ts',
      rawCode: themeToString(dropdownTheme),
    },
    {
      name: 'Dropdown item theme',
      language: 'angular-ts',
      rawCode: themeToString(dropdownItemTheme),
    },
    {
      name: 'Dropdown header theme',
      language: 'angular-ts',
      rawCode: themeToString(dropdownHeaderTheme),
    },
    {
      name: 'Dropdown divider theme',
      language: 'angular-ts',
      rawCode: themeToString(dropdownDividerTheme),
    },
  ];
}
