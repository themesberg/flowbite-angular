import type { TableOfContent } from '../shared/models/table-of-content';
import type { Example } from './examples';

import {
  sidebarItemGroupTheme,
  sidebarItemTheme,
  sidebarMenuTheme,
  sidebarPageContentTheme,
  sidebarTheme,
  sidebarToggleTheme,
  themeToString,
} from 'flowbite-angular';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarExampleService {
  public readonly defaultSidebar: Example[] = [
    {
      language: 'angular-html',
      name: 'sidebar/default',
    },
  ];

  public readonly sidebarTheme: Example[] = [
    {
      name: 'Sidebar theme',
      language: 'angular-ts',
      rawCode: themeToString(sidebarTheme),
    },
    {
      name: 'Sidebar item theme',
      language: 'angular-ts',
      rawCode: themeToString(sidebarItemTheme),
    },
    {
      name: 'Sidebar item menu theme',
      language: 'angular-ts',
      rawCode: themeToString(sidebarMenuTheme),
    },
    {
      name: 'Sidebar item toggle theme',
      language: 'angular-ts',
      rawCode: themeToString(sidebarToggleTheme),
    },
    {
      name: 'Sidebar toggle theme',
      language: 'angular-ts',
      rawCode: themeToString(sidebarToggleTheme),
    },
    {
      name: 'Sidebar item group theme',
      language: 'angular-ts',
      rawCode: themeToString(sidebarItemGroupTheme),
    },
    {
      name: 'Sidebar page content theme',
      language: 'angular-ts',
      rawCode: themeToString(sidebarPageContentTheme),
    },
  ];

  public readonly tableOfContent: TableOfContent[] = [
    {
      fragmentName: 'Default sidebar',
    },
    {
      fragmentName: 'Theme',
      children: [
        {
          fragmentName: 'Sidebar theme',
        },
        {
          fragmentName: 'Sidebar item theme',
        },
        {
          fragmentName: 'Sidebar item menu theme',
        },
        {
          fragmentName: 'Sidebar item toggle theme',
        },
        {
          fragmentName: 'Sidebar toggle theme',
        },
        {
          fragmentName: 'Sidebar item group theme',
        },
        {
          fragmentName: 'Sidebar page content theme',
        },
      ],
    },
  ];
}
