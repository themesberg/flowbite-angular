---
keyword: OverrideBaseStylePage
---

## Override base style

Each component provide its own configuration method. Configuration methods are named as follow :

<span class="text-xs md:text-base">
  <ul class="list-disc list-outside">
    <li>
      provideFlowbite<span class="text-primary-500">Component</span>Config
    </li>
  </ul>
</span>

You can used them to override the default behavior of components, and the style applied styles.

```typescript
import { provideFlowbiteBaseButtonConfig } from 'flowbite-angular/button';

import { type ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFlowbiteBaseButtonConfig({
      color: 'primary',
      outline: true,
      pill: false,
      size: 'lg',
    }),
  ],
};
```
