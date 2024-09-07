import type { TableOfContent } from '../shared/models/table-of-content';
import type { Example } from './examples';

import {
  navbarBrandTheme,
  navbarIconButtonTheme,
  navbarItemTheme,
  navbarTheme,
  navbarToogleTheme,
  themeToString,
} from 'flowbite-angular';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarExampleService {
  public readonly defaultNavbar: Example[] = [
    {
      language: 'angular-html',
      name: 'navbar/default',
    },
  ];

  public readonly navbarTheme: Example[] = [
    {
      name: 'Navbar theme',
      language: 'angular-ts',
      rawCode: themeToString(navbarTheme),
    },
    {
      name: 'Navbar item theme',
      language: 'angular-ts',
      rawCode: themeToString(navbarItemTheme),
    },
    {
      name: 'Navbar brand',
      language: 'angular-ts',
      rawCode: themeToString(navbarBrandTheme),
    },
    {
      name: 'Navbar toggle',
      language: 'angular-ts',
      rawCode: themeToString(navbarToogleTheme),
    },
    {
      name: 'Navbar icon button',
      language: 'angular-ts',
      rawCode: themeToString(navbarIconButtonTheme),
    },
  ];

  public readonly tableOfContent: TableOfContent[] = [
    {
      fragmentName: 'Default navbar',
    },
    {
      fragmentName: 'Theme',
      children: [
        {
          fragmentName: 'Navbar theme',
        },
        {
          fragmentName: 'Navbar item theme',
        },
        {
          fragmentName: 'Navbar brand',
        },
        {
          fragmentName: 'Navbar toggle',
        },
        {
          fragmentName: 'Navbar icon button',
        },
      ],
    },
  ];
}
