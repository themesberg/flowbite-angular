import type { Example } from './examples';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DropdownExampleService {
  public readonly defaultDropdown: Example[] = [
    {
      language: 'html',
      name: 'dropdown/default',
    },
  ];

  public readonly dividerDropdown: Example[] = [
    {
      language: 'html',
      name: 'dropdown/divider',
    },
  ];

  public readonly headerDropdown: Example[] = [
    {
      language: 'html',
      name: 'dropdown/header',
    },
  ];

  public readonly placedDropdown: Example[] = [
    {
      language: 'html',
      name: 'dropdown/placed',
    },
  ];
}
