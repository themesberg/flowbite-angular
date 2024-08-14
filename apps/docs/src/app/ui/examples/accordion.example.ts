import type { Example } from './examples';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccordionExampleService {
  public readonly defaultAccordion: Example[] = [
    {
      language: 'html',
      name: 'accordion/default',
    },
  ];

  public readonly alwaysOpenAccordion: Example[] = [
    {
      language: 'html',
      name: 'accordion/always-open',
    },
  ];
}
