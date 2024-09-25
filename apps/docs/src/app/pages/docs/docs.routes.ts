import { DocsComponent } from './docs.component';

import type { Routes } from '@angular/router';
import { NG_DOC_ROUTING } from '@ng-doc/generated';

export default [
  {
    path: '',
    redirectTo: 'getting-started/introduction',
    pathMatch: 'full',
  },
  {
    path: 'getting-started',
    redirectTo: 'getting-started/introduction',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DocsComponent,
    children: NG_DOC_ROUTING,
  },
] as Routes;
