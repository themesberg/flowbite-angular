import type { Example } from './examples';

import { badgeTheme, themeToString } from 'flowbite-angular';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BadgeExampleService {
  public readonly defaultBadge: Example[] = [
    {
      language: 'angular-html',
      name: 'badge/default',
    },
  ];

  public readonly largeBadge: Example[] = [
    {
      language: 'angular-html',
      name: 'badge/large',
    },
  ];

  public readonly linkBadge: Example[] = [
    {
      language: 'angular-html',
      name: 'badge/link',
    },
  ];

  public readonly iconBadge: Example[] = [
    {
      language: 'angular-html',
      name: 'badge/icon',
    },
  ];

  public readonly iconOnlyBadge: Example[] = [
    {
      language: 'angular-html',
      name: 'badge/icon-only',
    },
  ];

  public readonly badgeTheme: Example[] = [
    {
      name: 'Badge theme',
      language: 'angular-ts',
      rawCode: themeToString(badgeTheme),
    },
  ];
}
