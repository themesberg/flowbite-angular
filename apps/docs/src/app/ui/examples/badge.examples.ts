import type { Example } from './examples';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BadgeExampleService {
  public readonly defaultBadge: Example[] = [
    {
      language: 'html',
      name: 'badge/default',
    },
  ];

  public readonly largeBadge: Example[] = [
    {
      language: 'html',
      name: 'badge/large',
    },
  ];

  public readonly linkBadge: Example[] = [
    {
      language: 'html',
      name: 'badge/link',
    },
  ];

  public readonly iconBadge: Example[] = [
    {
      language: 'html',
      name: 'badge/icon',
    },
  ];

  public readonly iconOnlyBadge: Example[] = [
    {
      language: 'html',
      name: 'badge/icon-only',
    },
  ];
}
